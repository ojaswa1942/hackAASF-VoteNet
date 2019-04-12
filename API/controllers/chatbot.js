const handleChatbotResponse = (req,res,xss)=>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const message = xss(req.body.message, xssOptions).toLowerCase();	
	res.status(200).json('Baymax is in maintainence');
}

module.exports={
	handleChatbotResponse: handleChatbotResponse
};