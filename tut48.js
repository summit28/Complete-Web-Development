//Serving HTML files using nodejs
const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync('tut20.html');

const  server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'} )
    res.end(filecontent)
})

server.listen(80, '127.0.0.1',()=>{ // use port 80 bcz their is no need to explicitly mention port 80
    console.log('Listening of port 80');
})

