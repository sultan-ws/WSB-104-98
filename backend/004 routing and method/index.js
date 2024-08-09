const http = require('http');

http.createServer((req,res)=>{
    const params = req.url;
    console.log(req.method);

    if(params === '/home' && req.method === 'GET'){
        res.end('hello home')
    }
    else if(params === '/about'){
        res.end('hello about')
    }
    
}).listen(5200, ()=>{
    console.log('server is running on port 5200');
})