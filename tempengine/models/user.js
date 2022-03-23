const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    name:{
        type:String
    },
    active:{
        type:Boolean
    }

})

const mongodbModel=mongoose.model("user",userSchema);

module.exports=mongodbModel;

// Task is --->Create two apis --->One to create the user 
// Another to show the user in tabular format  ---->