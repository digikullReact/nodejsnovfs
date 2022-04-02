const express=require("express");

const router=express.Router();


router.get("/login",(req,res)=>{
   console.log(req.session)
   res.render("login")


})

router.get("/logout",(req,res)=>{
// you have to kill the session
delete req.session.isLoggedIn;

res.redirect("/login");


})



router.post("/submit",(req,res)=>{

   console.log(req.body);

   if(req.body.email=="john"){
      req.session.isLoggedIn=true;
      req.session.user=req.body.email
      res.redirect("/home");
      //res.render("home")
      // we wiill store details 




 
  

   }
   else{
      res.redirect("/login")
   }

   // We will get form data

   // We will start sessions



})




router.get("/home",(req,res)=>{
   console.log(req.session)
  if(req.session.isLoggedIn){
   res.render("home",{username:req.session.user})

  }

  else{
     res.redirect("/login");
  }





})


module.exports=router;