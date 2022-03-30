const express=require("express");
const app=express();
const userRoute=require("./routes/user");
const authRouter=require("./routes/auth");
const {engine}=require("express-handlebars");
const port=process.env.PORT || 9090

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');




app.use("/user",userRoute)
app.use("/auth",authRouter)





app.listen(port ,()=>{
    console.log("Server Running At port"+port);

})