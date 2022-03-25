const express = require("express");
const app = express();
const port = process.env.PORT || 9090;
const User = require("./models/user");
app.use(express.json());
app.set("view engine", "ejs");

// Routes Section -->

//{name ? <li></li> :""}

// Get operation
app.get("/home", (req, res) => {
  // We need to query the database in here --->
  User.find().then((data) => {
    console.log(data);
    res.render("home", { data: data, heading: "My Page" }); // it does two things --> one is the sends your html page +any data that you have
  });
});
//Create operation done

// Post operation
app.post("/api/create", (req, res) => {
  const body = req.body;
  console.log(body);

  const user = new User({
    name: body.name,
    active: body.active,
  });

  user.save().then((data) => {
    res.json({ message: "User Created", data: data });
  });
});

// Put operation


app.put("/api/update/:uid?",(req,res)=>{  // ? -->adding question mark will make it optional

    // We have to dp some operation in here
    const id=req.params.uid;
    const body=req.body;

    User.updateOne({_id:id},{$set:{name:body.name}}).then(data=>{
        res.json({message:"Update Success",data:data})
    }).catch(err=>{
        res.json({message:"Error",data:err})
    })



})


// Delete request 
app.delete("/api/delete/:name",(req,res)=>{
    // We have to perform opeartion
    const name=req.params.name;
/**
 * const id=req.params.id;
 * User.deleteOne({_id:id}).then(data=>{
    res.json({message:"Delete Success",data:data})


}).catch(err=>{
    res.json({message:"Update Success",data:data})


})
 */
User.deleteOne({name:name}).then(data=>{
    res.json({message:"Delete Success",data:data})


}).catch(err=>{
    res.json({message:"Update Success",data:data})


})


})




const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/novfs")
  .then((data) => {
    console.log("Db Connected SuccessFully !!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server Running");
});
