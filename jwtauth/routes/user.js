const express = require("express");
const router=express.Router();
const User=require("../models/user");
const jwt =require("jsonwebtoken");
const JwtVerify = require("../middlewares/auth");




router.post("/login",async(req,res)=>{

    const user=await User.findOne({username:req.body.username});
    if(user){
        // We have to match the passowrds as well
        if(user.password==req.body.password){

            // Login Success
            // We will generate jwt here 
           const token= await jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
               data:user.username
        
        },'wolverine');

        res.json({
            message:"Login Success",
            token:token
        })

        }
        else{
            res.json({message:"You have Entered The Wrong Password"})

        }


    }else{
        res.json({message:"User Not Found"})
    }



})

router.post("/signup",async(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password
    })

const data=await user.save();

res.json({
    message:"Success",
    data

})

})


router.get("/users",JwtVerify,async(req,res)=>{

    const data=await User.find();

    res.json({message:"Success",data:data});




})


module.exports=router;