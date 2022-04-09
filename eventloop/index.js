const express=require("express");
const app=express();

// worker threads
//clustering

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