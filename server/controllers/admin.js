const fetch = require('node-fetch');
const NodeRSA = require('node-rsa');
const serviceAcc = require('../service-accounts.json');

const priv_key = serviceAcc.key;
const key = new NodeRSA(priv_key);

const getData = (req,res, db) =>{
	var candData = {
		UJJ05: [],
		MUM04: [],
		GND02: [],
		BKN01: []
	};
	db('storage').select('*').where({name: 'didvote'})
	.then(didVoteHash =>{
		fetch(`https://ipfs.ojaswa.com/ipfs/${didVoteHash[0].hash}/votes.json`)
		.then(encres3 => encres3.text())
		.then(res3 => key.decrypt(res3, 'json'))
		.then(voteCount => {
			db('candidates').select('*')
			.then(cands => {
				cands.forEach(value => {
					candData[value.con].push({
						name: value.name,
						votes: voteCount[value.con][value.cid],
						symbol: value.symbol
					})
				})
				return res.status(200).json(candData)
			})
		})
	})
}

module.exports={
	getData: getData
};