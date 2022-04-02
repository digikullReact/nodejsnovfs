const express=require("express");
const app=express();
const routerObj=require("./routes/route")
const  session = require('express-session')


// this will create req.session object 
app.use(session({
    secret: 'keyboard cat',// a secret key to generate a random cookie hash
    resave: false,
    saveUninitialized: true,  // that means  the cookes would be saved 
    cookie: { secure: false ,maxAge: 30 * 24 * 60 * 60 * 1000 }  // tells that you have to store cookie even when the server is on http
  }))



// express.static
// this means the express knoww that whatever is inside this folder should be publicly available
app.use(express.static("static"));
app.use(express.urlencoded({extended:false}))


//app.set('views', './myviews')  // to configure the default directory for template engine
app.set('view engine', 'ejs')


app.use("/",routerObj)


module.exports=app;