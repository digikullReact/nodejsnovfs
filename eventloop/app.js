const cluster = require('cluster');
const express=require("express");
const app=express();

const numCPUs = require('os').cpus().length;
const process = require('process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {


app.get("/",(req,res)=>{

    for(let i=0;i<10000000;i++){
        console.log(i);
    }
    res.json({message:"Success"})
})

app.get("/api",(req,res)=>{
    res.json({message:"Api2"})
})

app.get("/home",(req,res)=>{
    res.json({message:"Api2"})
})
  
app.listen(5050,()=>{
    console.log("Server Running")
})

  console.log(`Worker ${process.pid} started`);
}