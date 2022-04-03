const express=require("express");
const app=express();
const authRouter=require("./routes/auth");
const fileRouter=require("./routes/file");
const cors=require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static("uploads"));

app.use(cors());



app.use("/auth",authRouter);
app.use("/file",fileRouter)




module.exports=app;