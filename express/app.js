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


//app.set('views', './myviews')  // to configure the default directory for template engine
app.set('view engine', 'ejs')


app.get('/template', (req, res) => {
  const data=[
    {
      name:"NAik"
    },
    {
      name:"Sanjiv"
    },
    {
      name:"Bhagyashree"
    }
  ]

  // render method is generally used when you are rendering any template engine
  res.render('temp', { data: data})


})

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

app.get("/ajaxhtml",(req,res)=>{
  // We have to send html file
 // console.log(__dirname); //  gives you the absolutre path of the current directory in which you are file  //global variable ../views

 // res.send("hello")
 //res.sendFile("../views/app.html") // relative path
 //console.log(__dirname+"/views/app.html");

res.sendFile(__dirname+"/views/ajaxapp.html")  ///

})


// rest api

app.get("/api/data",(req,res)=>{
  const data=[
    {
      name:"NAik"
    },
    {
      name:"Sanjiv"
    },
    {
      name:"Bhagyashree"
    }
  ]

  res.json(data);

})

app.get("/dynamichtml",(req,res)=>{
  //DB query
//  --Data will come from database  --->
  const data=[
    {
      name:"NAik"
    },
    {
      name:"Sanjiv"
    },
    {
      name:"Bhagyashree"
    }
  ]

let str="";
 
  for(let i=0;i<data.length;i++){
    str+=` <div class="col-4"> <div class="card" style="width: 18rem;">
    <img  width="100%" height="100%" src="/images/a.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>`

  }



  const html=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
      <link href="/css/bootstrap.min.css" rel="stylesheet"  >
      <link href="/css/style.css" rel="stylesheet">
      <title>Document</title>
  </head>
  <body>
  
  <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
  
  
        <div class="row">
         
  
          ${str}
  
         
  
        </div>
  
  </div>
  
  <script src="/js/main.js"></script>
      
  </body>
  </html>`

  res.send(html)
})


// Template engines--->




app.get("/largefile",(req,res)=>{
  const fs=require("fs")
  const readStream=fs.createReadStream("bigfile.txt");

  readStream.pipe(res);

  // how to use writestream   --->hw

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

