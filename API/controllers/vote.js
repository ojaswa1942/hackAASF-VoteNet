const fetch = require('node-fetch');

const handleVoteRequest = (req,res,db)=>{
	const {vid} = req.body;
	if(!vid)
		return res.status(400).json('Provide a VoterID');
	db('storage').select('*').where({name: 'voters'})
	.then((results)=>{
		if(!results.length)
			return res.status(404).json('User not found')
		else{
			fetch(`https://ipfs.premsarswat.me/ipfs/${results[0].hash}/${vid}.json`)
			.then(res => res.json())
			.then(userData => {
				const constituency = userData.con;
				db('storage').select('*').where({name: 'didvote'})
				.then(didVoteHash =>{
					fetch(`https://ipfs.premsarswat.me/ipfs/${didVoteHash[0].hash}/didvote.json`)
					.then(res2 => res2.json())
					.then(didVoteData => {
						if(didVoteData[vid])
							return res.status(401).json('Already voted');
						else {
							db('candidates').select('*').where({con: constituency})
							.then(cans => {
								let data = {
									userData,
									cans
								};
								return res.status(200).json(data);
							})
						}
					})
				})
			})

			// 1. Decrypt
			// 2. Get Constituency
			// 3. Check if voted
			// 4. Fetch and send competitors
		}
	})
	.catch(err =>{
		console.log(err);
		return res.status(500).json('Some error occurred. Try again later');
	})
}

const handleVoteResponse = (req,res,db)=>{
	const {cid, vid} = req.body;
	if(!vid || !cid)
		return res.status(400).json('Information Insufficient');
	
	//get req vote
	//Get & Decrypt votes & didvote
	//update votes
	//update didvote
	//Encrypt & upload votes & didvote
}

module.exports={
	handleVoteRequest: handleVoteRequest,
	handleVoteResponse: handleVoteResponse
};