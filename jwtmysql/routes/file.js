const express=require("express");
const { upload } = require("../controllers/fileupload.controller");
const router=express.Router();
const multipart = require('connect-multiparty');

const  multipartMiddleware = multipart({uploadDir:  './uploads'});



router.post("/upload",multipartMiddleware,upload)

//router.get("/getAll",getAll)

module.exports=router;
