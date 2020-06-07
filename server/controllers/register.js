const serviceAcc = require('../service-accounts.json');
const fs = require('fs');
const NodeRSA = require('node-rsa');
const ipfsClient = require('ipfs-http-client');
const { globSource } = ipfsClient;

const ipfs = ipfsClient({
  host: '127.0.0.1',
  port: 5001,
  protocol: 'http'
});

const handleRegister = async (req,res, db, bcrypt, xss) =>{
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
	fs.writeFile(`./uploads/voters/${vid}.json`, enc, err => {
		if(err)
			console.log(err);
	})
	
	// const dec = key.decrypt(enc, 'json')
	// console.log('dec.vid: ', dec.vid);
	for await (const file of ipfs.add(globSource('./uploads/voters', { recursive: true }))) {
	  console.log(file);
	}
	ipfs.addFromFs('./uploads/voters', { recursive: true }, (err, result) => {
		if (err) { throw err }
		console.log(result)
		db('storage').update({hash: result[result.length-1].hash}).where({name: 'voters'})
		.then(upd => {
			res.status(200).json(result[result.length-1].hash)
		})
		.catch(err =>{
			console.log(err);
			return res.status(400).json('Some error occurred. Try again later');
		})
	})
		
}

module.exports = {
	handleRegister: handleRegister
};