const app=require("./app");
const port =process.env.PORT || 9091


app.listen(port,()=>{

    console.log("Server Running at Port "+ port);
})

