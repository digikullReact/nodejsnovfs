const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Kitten = require("./models/Kitten");
const middleware=require("./middlewares/pre");

const port = process.env.PORT || 5050;

app.use(express.json());

app.use(middleware);


//Put request --->uopdation

app.put("/api/update/:id",(req,res)=>{

    // getting the ip
    //checking whether the user is authenicated or not
    const id=req.params.id

    const body=req.body;
    Kitten.updateOne({_id:id},{$set:{name:body.name}}).then(data=>{
        res.json({message:"Update Success",data:data})

    }).catch(err=>{
        res.json({message:"Failure",data:err})

    })

    

})

// Delete request 

app.delete("/api/delete/:id",(req,res)=>{

    const id=req.params.id

    Kitten.deleteOne({name:id}).then(data=>{
        res.json({message:"Delete Success",data:data})

    }).catch(err=>{
        res.json({message:"Failure",data:err})

    })



})


app.post("/api/save", async (req, res) => {
  const fluffy = new Kitten({ name: "fluffy" });

  await fluffy.save();

  res.json({ message: "Data Saved" });
});

app.get("/api/get", async (req, res) => {
  const kittens = await Kitten.find();

  res.json({ message: "Success", data: kittens });
});

// connecting with our database

mongoose
  .connect(
    "mongodb+srv://logan:GD3oXEgOQVg4PUra@cluster0.io38f.mongodb.net/augwe?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("Db connected SuccessFully");

    app.listen(port, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
