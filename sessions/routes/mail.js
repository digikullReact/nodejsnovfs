const express=require("express");
const app = require("../app");
const transporter=require("../nodemailer")

const router=express.Router();




router.post("/send",(req,res)=>{
    
    var message = {
        from: "bott90354@gmail.com",
        to: "shubhamdixit865@gmail.com",
        subject: req.body.subject,
        text: req.body.text,
        html: "<p>HTML version of the message</p>"
      };

    transporter().sendMail(message,function(err,data){
        if (err){
            console.log(err);
        }
        else{
            console.log("Message Sent" +data)

            res.json({
                message:"Success",
                data:data
        
            })
        }
 

    })

 

})



module.exports=router;