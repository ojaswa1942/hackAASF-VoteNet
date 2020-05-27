 const handleProfile=(req,res,db)=>{
	const email = req.email;
	let user={}, events;
 	db.select('*').from('patients').where({email})
	.then(data => {
		if(data.length){
			return db('reports')
			.join('doctors', 'reports.docid', '=', 'doctors.docid')
			.select('reports.date', 'reports.title', 'reports.hash', 'doctors.name', 'doctors.email')
			.where({pid: data[0].pid})
			.then(reports =>{
				let userData = {
					isUser: true,
					isDoc: false,
					userReports: reports,
					userInfo: data[0]
				}
				res.status(200).json(userData);						
			})
		}
		else{
 			db.select('*').from('doctors').where({email})
 			.then(doc => {
 				if(doc.length){
 					return db('reports')
					.join('patients', 'reports.pid', '=', 'patients.pid')
					.select('reports.date', 'reports.title', 'reports.hash', 'patients.pid', 'patients.name', 'patients.email')
					.where({docid: doc[0].docid})
					.then(reports =>{
						let userData = {
							isUser: false,
							isDoc: true,
							userReports: reports,
							userInfo: doc[0]
						}
						res.status(200).json(userData);						
					})
 				}
 				else{
					res.status(404).json('No such user');
 				}
 			})
		}
	})
	.catch(err => {console.log('Profilex', err); res.status(400).json('Something is wrong');});
}

module.exports={
	handleProfile: handleProfile
}