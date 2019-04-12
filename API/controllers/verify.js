
const handleVerifyRequest = (req,res,db)=>{
	const {id, hash} = req.body;
	db.transaction(trx =>{
	 	trx.select('*').from('verify').where({hash: hash})
		.then(verification_entry => {
			if(verification_entry.length){
				return trx('users').update({confirm: 1}).where({email: verification_entry[0].email})
					.then(() =>{
						return trx('verify')
						.where({
							email: verification_entry[0].email,
							hash: hash
						})
						.del()
						.then(()=> res.status(200).json('Email verification successfull!'))
						.then(trx.commit)
					})
					.catch(trx.rollback)
			}
			else
				res.status(302).redirect('https://www.infotsav.in/404');
		})
		.catch(trx.rollback)
	})
	.catch(err => res.status(400).json('Something is wrong'));
}

module.exports={
	handleVerifyRequest: handleVerifyRequest
};