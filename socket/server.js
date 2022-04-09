require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port =process.env.PORT || 5050

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 

  cors: {
    origin: ['http://localhost:3000'],
   
  }
}); // Socket object created
// emit keyword -->for emitting an event 
// if you want to listen to an event --> on


// Whenever a client will get connected with our seocket server
io.on("connection", (socket) => {

  socket.on("message",(data)=>{
    console.log(data);

    socket.broadcast.emit("received",data)
  })

 
    // 
  // ...
},[]);

httpServer.listen(port);