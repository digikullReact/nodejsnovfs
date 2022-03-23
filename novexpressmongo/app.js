const express=require("express");
const app=express();

app.use(express.json());

const User=require("./models/User");
const mongoose=require("mongoose");

const port=process.env.PORT || 9090


/// We have to connect with the database 

mongoose.connect("mongodb+srv://logan:GD3oXEgOQVg4PUra@cluster0.io38f.mongodb.net/novfs?retryWrites=true&w=majority").then(data=>{
    console.log("Connection Success");
}).catch(err=>{
    console.log(err);
})

app.post("/api/save",(req,res)=>{

    const user=new User({
        name:req.body.name
    })

    user.save().then(data=>{
        res.json({message:"Success",data:data});
    })
})


app.get("/api/get",async(req,res)=>{

    // Event queue
 const data=await  User.find()
 

  res.json({message:"Success",data:data});
})


app.listen(port,()=>{
    console.log("Server Running At Port "+port)
})


// find
//update
//insert //create
//delete 
//findOne
//deleteOne
//updateOne
//  aggregation --->bit of 

//wednesday --> complete the crud operation 

// template engines -->handlebars with mongodb 

// mysql as well intro  --->
//sequelize 
// sequelize crud 

// http ---->not necessary --->

/// Login form using ejs template engine -----> template  you can use bootstrap for that 

//  You have to create another application -->which has apis get ,post delete 
// send github repo in this chat only