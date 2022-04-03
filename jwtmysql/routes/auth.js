const express=require("express");
const { createUser, getAll } = require("../controllers/auth.controller");
const router=express.Router();


router.post("/create",createUser)
router.get("/getAll",getAll)

//router.get("/getAll",getAll)

module.exports=router;
