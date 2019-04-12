const serviceAcc = require('../service-accounts.json');
const fs = require('fs');
const ipfsClient = require('ipfs-http-client');
const NodeRSA = require('node-rsa');

const ipfs = ipfsClient({
  host: '127.0.0.1',
  port: 5001,
  protocol: 'http'
});

const handleRegister = (req,res, db, bcrypt, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	// const {email, name, college, city, phone, gender, password} =xss(req.body.userData, );
	const vid = xss(req.body.userData.vid, xssOptions);
	const name = xss(req.body.userData.name, xssOptions);
	const father = xss(req.body.userData.father, xssOptions);
	const dob = xss(req.body.userData.dob, xssOptions);
	const sex = xss(req.body.userData.sex, xssOptions);
	const address = xss(req.body.userData.address, xssOptions);
	const con = xss(req.body.userData.con, xssOptions);
	console.log(req.body.userData);


	if(!vid || !name || !father || !address || !dob || !sex || !con)
	{
		return res.status(400).json('Incorrect form submission');
	}
	const priv_key = serviceAcc.key;
	const key = new NodeRSA(priv_key);
	const voterData = JSON.stringify({
		vid: vid,
		name: name,
		father: father,
		dob: dob,
		sex: sex,
		address: address,
		con: con
	})
	console.log('voterData: ', voterData);
	const enc = key.encrypt(voterData, 'base64');
	console.log('enc: ', enc);
	fs.writeFile(`../uploads/voters/${vid}.json`, enc, err => {
		if(err)
			console.log(err);
	})
	// db.select('*').from('patients').where({email}).
	// then((data) =>{
	// 	if(data.length)
	// 		res.status(400).json('User already registered!');
	// 	else{
	// 		bcrypt.hash(password, null, null, function(err, hash) {
	// 			if(err) console.log(err);
	// 			db.transaction(trx=>{
	// 				return trx.insert({
	// 					email: email, 
	// 					name: name,
	// 					gender: gender,
	// 					address: address,
	// 					number: number,
	// 					pid: pid,
	// 					dob: dob,
	// 					hash: hash
	// 				})
	// 				.into('patients')
	// 				.then(() => {
	// 					console.log('Got here');
	// 					return trx('verify')
	// 					.insert({
	// 						email: email,
	// 						hash: verifyHash
	// 					})
	// 					.then(() =>{
	// 						res.status(200).json('Sucessfully Registered. An email has been sent to '+email+' .');
	// 						sendEmail(name, email, verifyHash, pid);
	// 					})
	// 					.then(trx.commit)
	// 				}).catch(trx.rollback)
	// 			})
	// 			.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
	// 		})
	// 	}
	// });
}

module.exports = {
	handleRegister: handleRegister
};