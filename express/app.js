const express = require("express");
const app = express();
const port = process.env.PORT || 9091;

// For getting the json data from post request
// application/json in headers
app.use(express.json()); //

// For getting the form url encoded data in the request
app.use(express.urlencoded({extended:true}))


// express.static
// this means the express knoww that whatever is inside this folder should be publicly available
app.use(express.static("static"));


app.get("/api", function (req, res, next) {
  res.send("Hello World");
});


app.get("/api/json", function (req, res) {
    const data={
        name:"Prajakta"
    }
    res.json(data);

    /*
    res.send({
        name:"John"
    });
    */
  });


  // 

  app.post("/api/post",function(req,res){
      console.log(req.body);
      const data=req.body;

    res.json(data);

  })

///  -----> HTMl pages
// M -- V ----> Controller --->

app.get("/html",(req,res)=>{
  // We have to send html file
 // console.log(__dirname); //  gives you the absolutre path of the current directory in which you are file  //global variable ../views

 // res.send("hello")
 //res.sendFile("../views/app.html") // relative path
 //console.log(__dirname+"/views/app.html");

res.sendFile(__dirname+"/views/app.html")  ///

})






app.listen(port, () => {
  console.log("Server Running At Port " + port);
});







// Next session

// Sending html and 
//template handlebars and the ejs template engiene
// Creating crud api with static data

// relational db//non relational db
// Intro to mongodb ---> mongoose


// Mysql sequeleize orm as well 

