const http = require('http');
const data = require('./app');

// console.log(http)

http.createServer((req, res)=>{
   try{
    res.writeHead(200,{'content-type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
   }
   catch(error){
    res.writeHead(500,{'content-type': 'application/json'});
    res.end(JSON.stringify({message:'internal server error'}));
   }
}).listen(5200);

console.log(__dirname);
console.log(__filename)