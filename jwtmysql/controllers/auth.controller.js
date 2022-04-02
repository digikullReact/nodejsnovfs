const {Assignment}=require("../sequelize");

module.exports={
  

    createUser:async(req,res)=>{

        const assignment = await Assignment.create({ name:req.body.name, subject: req.body.subject });

        res.json({message:"Success",data:assignment})

    },

    getAll:async(req,res)=>{

        const assignment = await Assignment.create({ name:req.body.name, subject: req.body.subject });

        res.json({message:"Success",data:assignment})

    },

    //



}