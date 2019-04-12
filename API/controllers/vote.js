
const handleVoteRequest = (req,res,db)=>{
	const {vid} = req.body;
	if(!vid)
		return res.status(400).json('Provide a VoterID');

	db('users').select('*').where({vid})
	.then((results)=>{
		if(!results.length)
			return res.status(404).json('User not found')
		else{
			console.log(results[0].hash);
			// 1. Decrypt
			// 2. Get Constituency
			// 3. Check if voted
			// 4. Fetch and send competitors
		}
	})
	.catch(err =>{
		return res.status(500).json('Some error occurred. Try again later');
	})
}

const handleVoteResponse = (req,res,db)=>{
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