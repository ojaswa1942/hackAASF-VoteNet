const fs = require('fs');
const NodeRSA = require('node-rsa');
const serviceAcc = require('../service-accounts.json');

const priv_key = serviceAcc.key;
const key = new NodeRSA(priv_key);

const file = process.argv[2];
if( !file ){
    console.log('No file specified');
    process.exit(1);
}

const processedName = process.argv[3] || file;

fs.readFile(`./${file}`, 'utf8', (error, data) => {
    if(error) {
        console.log(`Some error occured while reading: ${error}`);
        process.exit(1);
    }
    const enc = key.encrypt(data, 'base64');
    fs.writeFile(`./${processedName}`, enc, error => {
        if(error){
            console.log(`Some error occured while reading: ${error}`);
            process.exit(1);
        }
    });
})