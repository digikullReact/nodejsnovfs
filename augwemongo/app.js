const express=require("express");
const app=express();
const mongoose = require('mongoose');
const Kitten=require("./models/Kitten")

const  port =process.env.PORT || 5050

app.post("/api/save",async(req,res)=>{
    const fluffy = new Kitten({ name: 'fluffy' });

    await fluffy.save()
    


    res.json({message:"Data Saved"})

})

app.get("/api/get",async(req,res)=>{
    const kittens= await Kitten.find();

 
    


    res.json({message:"Success",data:kittens})

})


// connecting with our database

mongoose.connect("mongodb+srv://logan:GD3oXEgOQVg4PUra@cluster0.io38f.mongodb.net/augwe?retryWrites=true&w=majority").then(data=>{
    console.log("Db connected SuccessFully")

    app.listen(port,()=>{
        console.log("Server Started")
    })
}).catch(err=>{
    console.log(err);

})


