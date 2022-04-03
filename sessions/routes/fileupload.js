const express=require("express");
const app = require("../app");
const multipart = require('connect-multiparty');
const  multipartMiddleware = multipart({ uploadDir:  './public/uploads' }); // middleware

const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        //console.log(file)
     //  const fileExtension=file.originalname.split(".")[1]
       //console.log(file.originalname.split("."));
       
      cb(null,file.originalname) //Appending .jpg
    }
  })
  

const upload = multer({ storage: storage })
const User=require("../models/user");


const router=express.Router();

//headers

// Json data --- application/json
// url-encoded --application/www-urlencode
// formdata (binary data) -- multipart/form-data

router.get("/getAll",(req,res)=>{

    User.find().then(data=>{

        res.render("home",{data:data});

    }).catch(err=>{
        console.log(err);
    })
})


router.post("/upload",upload.single('file'),(req,res)=>{
    //console.log(req.file);
   // You can insert the file name in database

   
   const user=new User({
       name:req.body.name,
     //  image:req.files.file.path.split("public")[1]
     image:req.file.originalname


   })

   user.save().then(data=>{
    res.json({message:"File Uploaded",})

   })
   




})





module.exports=router;