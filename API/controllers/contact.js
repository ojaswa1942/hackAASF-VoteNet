const nodemailer = require('nodemailer');
const serviceAcc = require('../service-accounts.json');

const sendEmail = (sname, semail, sphone, ssubject, smessage) => {
	console.log("----------Contact Us--------");
	var msgbasic = smessage.replace(/\n/g, " ");
	var msg = smessage.replace(/\n/g, "<br />");
	var transporter = nodemailer.createTransport({
        host: 'premsarswat.me',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: serviceAcc.mail_user, // generated ethereal user
            pass: serviceAcc.mail_pass // generated ethereal password
        }
    });
    transporter.verify(function(error, success) {
	   if (error) {
	        console.log('miserable', error);
	   } else {
	        console.log('Server is ready to take our messages');

	        let mailOptions = {
		        from: '"Health Hub" <hacknsut@premsarswat.me>', // sender address
		        to: 'prem@premsarswat.me', // list of receivers
		        subject: 'Application for doctor for Health Hub', // Subject line
		        text: 'Name: '+sname+' Email: '+semail+' Subject: '+ssubject+' Message: '+msgbasic, // plain text body
		        html: '<b>Name: </b>'+sname+'<br><br><b>Email: </b>'+semail+'<br><br><b>Subject: </b>'+ssubject+'<br><br><b>Message: </b><br><br><div>'+msg+'</div>'// html body
		    };
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        console.log('Message sent for Contact Us: %s', info.messageId);
		        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		    });
	   }
	});
	
}

const handleContact = (req,res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	console.log(req.body)
	const email = xss(req.body.email, xssOptions);
	const name = xss(req.body.name, xssOptions);
	const subject = xss(req.body.password, xssOptions);
	const specialization = xss(req.body.specilization, xssOptions);
	const message = xss(req.body.purpose, xssOptions);

	if(!email || !name || !subject || !message || !specialization )
	{
		return res.status(400).json('Incorrect form submission');
	}
	res.status(200).json('Your message has been sucessfully submitted.');
	sendEmail(name, email, phone, subject, message);
}

module.exports = {
	handleContact: handleContact
};