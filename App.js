const http = require('http');

const server = http.createServer((req,res)=>{
 if(req.url === '/'){
     res.end('Welcome to our home page')
 }
 if(req.url === '/About'){
    res.end('Welcome to our About page')
}
 res.end(`
 <h1> e no dey<h1>
 <a href="/"> back home`)
 
})

server.listen(5000)