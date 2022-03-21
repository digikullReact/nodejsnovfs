const mongoose =require("mongoose");


const userScheman= new mongoose.Schema({
    name:{
        type:String
    }

})

const userModel = mongoose.model('user', userScheman);
module.exports=userModel