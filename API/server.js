const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const xss = require('xss');
const knex = require('knex');
const cookieParser = require('cookie-parser');
const chatbot = require('./controllers/chatbot');
const signin = require('./controllers/signinPatient');
const signin2 = require('./controllers/signinDoc');
const profilex = require('./controllers/profilex');
const withAdmin = require('./middleware/withAdmin');
const register = require('./controllers/register');
const vote = require('./controllers/vote');
const contact = require('./controllers/contact');
const withAuth = require('./middleware/middleware');
const resetPass = require('./controllers/resetPass');
const lost = require('./controllers/lost');
const hUpload = require('./controllers/upload');
const serviceAcc = require('./service-accounts.json');

//require("dotenv").config();
const db = knex({
  client: 'mysql',
  connection: {
    host : serviceAcc.host,
    user : serviceAcc.user,
    password : serviceAcc.password,
    database : serviceAcc.database
  }
});

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(multer({dest:'./uploads/'}));

app.get('/api', (req,res)=>{ res.send('it is working')});
app.post('/api/register', (req,res)=> {register.handleRegister(req, res, db, bcrypt, xss)});
app.post('/api/vote', (req,res)=>{vote.handleVoteRequest(req, res, db)});
app.post('/api/voted', (req,res)=>{vote.handleVoteResponse(req, res, db)});
app.get('/api/logout', (req, res) => {res.clearCookie('token'); res.status(301).redirect('/login');});
app.get('/api/profilex', withAuth, (req, res) => {profilex.handleProfile(req, res, db)});
app.get('/api/getusers', withAdmin, (req, res) => {getUsers.returnUsers(req, res, db)});
app.get('/api/checkAdmin', withAdmin, (req, res) => {
  res.sendStatus(200);
});
app.get('/api/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
  },
});
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) =>{hUpload.handleUpload(req, res, db)});

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`We are on on port ${PORT}!`);
})
