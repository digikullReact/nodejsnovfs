//http and https
const http=require("http");
// Server With Simple HTTP 

const server = http.createServer((req, res) => {
   
    if(req.url=="/home" && req.method=="GET") {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('home');

    }
    else if(req.url=="/user" && req.method=="GET") {

        //Data -here
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('user');

    }

    else if(req.url=="/post" && req.method=="POST") {

        // Data here ----post request
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('user post request');

    }

   
  });

  server.listen(9091,()=>{
      console.log("Server Running At post 9091")

  })