const {Assignment}=require("../sequelize");

module.exports={


    upload:async function(req,res){

    
        const assignment = await Assignment.create({ name:req.body.name, subject: req.body.subject,image:req.files.file.path });

        res.json({message:"Success",data:assignment})


     



    },

    




}