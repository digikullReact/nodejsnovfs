const app=require("./app");
const port =process.env.PORT || 9091
const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/fileupload").then(data=>{
    console.log("Mongodb connected")
}).catch(err=>{
    console.log(err);
})


app.listen(port,()=>{

    console.log("Server Running at Port "+ port);
})

