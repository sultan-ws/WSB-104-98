const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'files');

console.log(filepath);

//create file

// fs.writeFileSync(`${filepath}/test.txt`, 'hello world again');

//read file

// fs.readFile(`${filepath}/test.txt`, 'utf-8', (err, data)=>{

//     if(err) return console.log(err);
//     console.log(data);
// })

//update file

// fs.appendFileSync(`${filepath}/test.txt`, ' again updated');


//deletefile

fs.unlinkSync(`${filepath}/test.txt`);