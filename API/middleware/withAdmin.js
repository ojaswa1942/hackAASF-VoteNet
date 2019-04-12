const jwt = require('jsonwebtoken');
const secret = 'iAmVeryBadAtThis';

const withAdmin = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  if (!token) {
    res.status(401).json('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).json('Unauthorized: Invalid token');
      } else {
      	if (decoded.email === 'prem@infotsav.in' || decoded.email === 'admin@infotsav.in' || decoded.email === 'ojaswa1942@gmail.com' || decoded.email === 'ojaswa@infotsav.in'){
        	req.email = decoded.email;
        	next();
        }
        else {
        	res.status(402).json('Money Required: Not Admin');
        }
      }
    });
  }
}

module.exports = withAdmin;