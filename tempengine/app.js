const express=require("express");
const app=express();
const port=process.env.PORT || 9090
const User=require("./models/user");
app.use(express.json());
app.set('view engine', 'ejs')

// Routes Section -->

//{name ? <li></li> :""}
app.get("/home",(req,res)=>{
    // We need to query the database in here --->
    User.find().then(data=>{
        console.log(data);
        res.render("home",{data:data ,heading:"My Page"})  // it does two things --> one is the sends your html page +any data that you have

        

    })



})
//Create operation done 
app.post("/api/create",(req,res)=>{

 const body=req.body;
 console.log(body);

 const user=new User({
     name:body.name,
     active:body.active
 })


 user.save().then(data=>{
     res.json({message:"User Created",data:data});
 })

 


})




const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/novfs").then(data=>{
    console.log("Db Connected SuccessFully !!");
}).catch(err=>{
    console.log(err);
})

app.listen(port ,()=>{
    console.log("Server Running")

})