const express=require("express");
const app=express();

app.use(express.json());

app.get("/api",(req,res)=>{
    // Mongodb query 

    res.status(200).json({message:"Success"})
})

app.post("/api",(req,res)=>{

    console.log(req.body);
    const data=[{name:"John"}]

    res.status(200).json({message:"Success",data})
})



module.exports=app;