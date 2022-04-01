const app=require("./app");
const port =process.env.PORT || 9090;
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/novjwt").then(data=>{
    app.listen(port,()=>{

        console.log("Mongodb connected")
        console.log("Server Running At Port "+port);
    })
 

}).catch(err=>{
    console.log(err)

})


