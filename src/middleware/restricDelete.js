import jwt from "jsonwebtoken"

const allowTodelete= (req,res,next)=>{

   try {
    const authH=req.headers.authorization;
    
    //Split the string from the Bearer word and get the second index
const token=authH.split(" ")[1];
    if(!authH){
        return res.status(401).json({
            message:"No token provided"
        })
    }
    else{
       const checkToken=jwt.verify(token,process.env.SECRETE_KEY);
        console.log(checkToken.userId);
if(!checkToken){
   return res.status(401).status.json({
        message:"Token is invalid or has expired! Retry "
    })
}
else{
const {userId}=checkToken
const {mainUser,isAdmin}=req.body;
if(userId!==mainUser){
    return res.status(403).json({
        message:"Access denied"
    })
}else if(userId===mainUser && isAdmin===false){
   return res.status(403).json({
    message:"Access denied!, You can only edit a blog"
   }) 
}
next();
}
    }
   } catch (error) {
    console.log(error)
   }
}
export default allowTodelete