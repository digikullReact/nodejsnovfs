const http=require("http");
const fs=require("fs");

// Streaming the file 
const readStream=fs.createReadStream("bigfile.txt",{
encoding:"utf-8"
})


const server = http.createServer((req, res) => {
    
  
    if (req.url == "/home" && req.method == "GET") {
      // this data event wiill be meitted by http server
     
  
      res.setHeader("Content-Type", "text/html");
        res.writeHead(200, { "Content-Type": "text/plain" });
        readStream.pipe(res).on("finish",function(){
            res.end("home"); // ending the response

        })
       
    }
    else if (req.url == "/api" && req.method == "GET") {
        // this data event wiill be meitted by http server
       const data=JSON.stringify({
        name:"John",
        age:"20"
    })
    
        res.setHeader("Content-Type", "application/json");
          res.writeHead(200, { "Content-Type": "application/json" });
         res.end(data)
         
      }
  });
  
  server.listen(9091, () => {
    console.log("Server Running At post 9091");
  });
  