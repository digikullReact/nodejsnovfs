const app=require("./app");
const port=process.env.PORT || 9097

app.listen(port,()=>{
    console.log("Server Runing at port " + port)
})