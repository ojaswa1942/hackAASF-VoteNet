const ipfsClient = require('ipfs-http-client');
const fs = require('fs');

const MAX_SIZE = 52428800;


const ipfs = ipfsClient({
  host: '127.0.0.1',
  port: 5001,
  protocol: 'http'
});

const handleUpload = (req,res, db) =>{
	if (!req.file) {
	    return res.status(422).json({
	      error: 'File needs to be provided.',
	    });
	}
  console.log(req.file);
  console.log(req.body.email);
  const email = req.body.email;
  const did = req.body.did;
  const title = req.body.title;

  const fileSize = req.file.size;
  if (fileSize > MAX_SIZE) {
    fs.unlink(req.file.path);

    return res.status(422).json({
      error: `Image needs to be smaller than ${MAX_SIZE} bytes.`,
    });
  }

  db.select('*').from('patients').where({email})
  .then(user => {
    if(user.length){
      const data = fs.readFileSync(req.file.path);
      return ipfs.add(data, (err, files) => {
        console.log(files);
        //fs.unlink(req.file.path);
        if (files) {
          return db.insert({
            pid: user[0].pid, 
            docid: did,
            title: title,
            hash: files[0].hash
          })
          .into('reports')
          .then(() =>{
            return db('reports')
            .join('patients', 'reports.pid', '=', 'patients.pid')
            .select('reports.date', 'reports.title', 'reports.hash', 'patients.pid', 'patients.name', 'patients.email')
            .where({docid: did})
            .then(reports =>{
              let userData = {
                isUser: false,
                isDoc: true,
                userReports: reports,
                hash: files[0].hash,
                link: 'https://ipfs.premsarswat.me/ipfs/'+files[0].hash
              }
              return res.status(200).json(userData);
            })
          })
        }
        return res.status(500).json({
          error: err,
        });
      });
    }
    else{
      res.status(404).json('No such user');
    }
  })

  
}

module.exports = {
	handleUpload: handleUpload
};