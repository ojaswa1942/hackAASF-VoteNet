const jwt = require('jsonwebtoken');
const secret = 'iAmVeryBadAtThis';

const handleSignin = (req,res,db,bcrypt,xss)=>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const {password} = req.body;
	const email = xss(req.body.email, xssOptions);
	// const email = req.body.username;
		if(!email || !password)
	{
		return res.status(400).json('Incorrect form submission');
	}

	db.select('*').from('patients')
	.where({email})
	.then(data => {
		if(data.length){
			bcrypt.compare(password, data[0].hash, function(err, result) {
				if(result)
					{
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
						// Issue token
					        const payload = {email};
					        const token = jwt.sign(payload, secret, {
					        	expiresIn: '30d'
					        });
					        res.status(200).cookie('token', token, { maxAge: 2419200000, httpOnly: true }).json(userData)
						})
						.catch(err => {console.log(err); res.status(400).json('Some error occurred');})
					}
				else
					return res.status(400).json("Invalid Credentials");
		 	})
		}
		else res.status(400).json("Invalid Credentials");
	})
	.catch(err=> {console.log(err); res.status(400).json('Some error occurred')})	
}

module.exports={
	handleSignin: handleSignin
};