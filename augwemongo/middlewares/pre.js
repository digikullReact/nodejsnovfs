function middleware(req,res,next){
    ///whether is user is auth or mnot

    if(req.body.active==true){
        console.log("Reueest Recived");
        next();
    }
    else{
        res.json({message:"Not authenticated"})
    }

  
}


module.exports=middleware;