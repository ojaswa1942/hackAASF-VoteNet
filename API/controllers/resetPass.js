const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const sendEmail = (semail, sverifyHash, seyeFID, sname) => {
	console.log("Oh Yeah");
	const verifyLink = 'https://www.infotsav.in/resetPass/id='+seyeFID+'/hash='+sverifyHash;
	console.log(verifyLink);
	var transporter = nodemailer.createTransport({
        host: 'infotsav.in',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'admin', // generated ethereal user
            pass: 'igtsea6am' // generated ethereal password
        }
    });
    transporter.verify(function(error, success) {
	   if (error) {
	        console.log('miserable', error);
	   } else {
	        console.log('Server is ready to take our messages');

	        let mailOptions = {
		        from: '"Infotsav" <admin@infotsav.in>', // sender address
		        to: semail, // list of receivers
		        subject: 'Reset password for your Infotsav account', // Subject line
		        text: 'Hey '+sname+', We received a request for resetting password for your account in Infotsav 19 with email '+semail+' . To reset your password click the button below.'+verifyLink+' Team Infotsav', // plain text body
		        html: '<!DOCTYPE html><html lang="en" ><head><meta charset="UTF-8"><title>Password reset request for your Infotsav Account</title> </head><body><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;"><tr><td align="center" valign="top"><!--[if (gte mso 9)|(IE)]><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" valign="top" width="750"><![endif]--><table cellpadding="0" cellspacing="0" border="0" width="750" class="table750" style="width: 100%; max-width: 750px; min-width: 350px; background: #0f111a;"><tr><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td><td align="center" valign="top" style="background: #0f111a; color: #fff;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #0f111a;"><tr><td align="right" valign="top"><div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="center" valign="top"><div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div><a href="https://infotsav.in" style="display: block; max-width: 192px;"><img src="https://infotsav.in/headers.png" alt="infotsav" width="80" border="0" style="display: block; width: 80px;" /></a><div class="top_pad2" style="height: 48px; line-height: 48px; font-size: 46px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="left" valign="top"><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">Reset Your Password</span></font><div style="height: 21px; line-height: 21px; font-size: 19px;">&nbsp;</div><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 20px; line-height: 28px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 20px; line-height: 28px;">Hey '+sname+',</span></font><div style="height: 6px; line-height: 6px; font-size: 4px;">&nbsp;</div><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 20px; line-height: 28px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 20px; line-height: 28px;">We received a request for resetting password for your account in Infotsav 19 with email '+semail+' . To reset your password click the button below.</span></font><div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div><table class="mob_btn" cellpadding="0" cellspacing="0" border="0" style="background: #6070E9; border-radius: 4px;"><tr><td align="center" valign="top"><a href="'+verifyLink+'" target="_blank" style="display: block; border: 1px solid #6070E9; border-radius: 4px; padding: 19px 27px; font-family: \'Source Sans Pro\', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;"><font face="\'Source Sans Pro\', sans-serif" color="#ffffff" style="font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;"><span style="font-family: \'Source Sans Pro\', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">Confirm Email</span></font></a></td></tr></table><div style="height: 90px; line-height: 90px; font-size: 88px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #0f111a;"><tbody><tr><td align="center" valign="top"><font face="\'Source Sans Pro\', sans-serif" color="#868686"line-height: 20px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #dbc8c8; font-size: 15px; line-height: 20px;">Infotsav 19<br>ABV IIITM, Gwalior, Madhya Pradesh (474015)      </span></font><div style="height: 4px; line-height: 4px; font-size: 2px;">&nbsp;</div><div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div><div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div></td></tr></tbody></table></td></tr></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></table></body></html>' // html body
		    };
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        console.log('Message sent: %s', info.messageId);
		        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		    });
	   }
	});
	
}

const handleResetPassReq = (req,res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const email = xss(req.body.email, xssOptions);
	const verifyHash = randomstring.generate(15);

	if(!email)
	{
		return res.status(400).json('Incorrect form submission');
	}
	db.select('*').from('users').where({email})
	.then((data) =>{
		if(data.length){
			db.select('*').from('pass_reset').where({email})
			.then(passData =>{
				console.log(passData);
				if(!passData.length){
					return db('pass_reset').insert({
						email: email,
						hash: verifyHash
					})
					.then((didItHappen)=> {
						res.status(200).json('Visit the link sent via email to continue');
						sendEmail(email, verifyHash, data[0].ifid, data[0].name);				
					})
					.catch(()=> res.status(400).json('Some error occurred!'))
				}
				else{
					return db('pass_reset').update({hash: verifyHash}).where({email})
					.then(()=>{
						res.status(200).json('Visit the link sent via email to continue');
						sendEmail(email, verifyHash, data[0].ifid);				
					})
					.catch(()=> res.status(400).json('Some error occurred!'))
				}
			})
		}
		else
			res.status(400).json('User does not exist!');
	})
	.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
}


const handleResetPassRes = (req,res,db, bcrypt)=>{
	const {id, hash, password} = req.body;
	if(!id || !hash || !password)
	{
		return res.status(400).json('Incorrect form submission');
	}
	db.transaction(trx =>{
	 	trx.select('*').from('pass_reset').where({hash: hash})
		.then(verification_entry => {
			bcrypt.hash(password, null, null, function(err, hashedPass) {
				if(err) {
					console.log(err);
					throw(err);
				}
				if(verification_entry.length){
					return trx('credentials').update({password: hashedPass}).where({email: verification_entry[0].email})
						.then(() =>{
							return trx('pass_reset')
							.where({
								email: verification_entry[0].email,
								hash: hash
							})
							.del()
							.then(()=> res.status(200).json('Password change successfull!'))
							.then(trx.commit)
						})
						.catch(trx.rollback)
				}
				else
					return res.status(302).redirect('https://www.infotsav.in/404');
			})
		})
		.catch(trx.rollback)
	})
	.catch(err => res.status(400).json('Something went wrong'));
}
const handleResetPassInit = (req,res,db)=>{
	const {id, hash} = req.body;
	if(!id || !hash)
	{
		return res.status(400).json('Incorrect form submission');
	}
 	db.select('*').from('pass_reset').where({hash: hash})
 	.then(verification_entry => {
		if(verification_entry.length)
			res.sendStatus(200);
		else
			res.status(302).redirect('https://www.infotsav.in/404');
 	})


}
module.exports = {
	handleResetPassReq: handleResetPassReq,
	handleResetPassInit: handleResetPassInit,
	handleResetPassRes: handleResetPassRes
};