const nodemailer=require("nodemailer");



function createTransport(){


const transporter= nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "bott90354@gmail.com",
          pass: "Test#DF@123456",
        },
      });

      return transporter;


}


module.exports=createTransport;


