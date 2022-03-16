const express = require("express");
const app = express();
const port = process.env.PORT || 9091;

// For getting the json data from post request
app.use(express.json()); //

// For getting the form url encoded data in the request
app.use(express.urlencoded({extended:true}))


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

app.listen(port, () => {
  console.log("Server Running At Port " + port);
});
