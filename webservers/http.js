//http and https
const http = require("http");
// Server With Simple HTTP

//const requestListener=

// Server Creation code

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/home" && req.method == "POST") {
    // this data event wiill be meitted by http server
    req.on("data", (data) => {
      console.log(data.toString());
    });

    req.on("end", () => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home"); // ending the response
    });
  } else if (req.url.match(/\/getRequest\/[1-9]/g) && req.method == "GET") {
    // this data event wiill be meitted by http server
     let param=req.url.split("/")[2]
     

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Your Id is "+param); // ending the response
  }
});

server.listen(9091, () => {
  console.log("Server Running At post 9091");
});
