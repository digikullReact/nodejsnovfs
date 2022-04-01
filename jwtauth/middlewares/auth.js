const jwt=require("jsonwebtoken");
const JwtVerify=async function(req,res,next){
    //console.log(req.headers);
        // We have to check for jwt --->

    const  token=req.headers.authorization;

    if(token){

        /// We have to verify the token 
        try {
            
            var decoded = jwt.verify(token, 'wolverine');
            next();
        } catch (error) {
            console.log(error);

            res.json({message:"Token Malformed ,or the token is expired"})
        }
    

        


    }

    else{
        res.json({message:"Token Not Present"})
    }






}


module.exports=JwtVerify;