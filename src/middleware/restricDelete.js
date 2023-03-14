import jwt from "jsonwebtoken"

const allowTodelete= (req,res,next)=>{

   try {
    const authH=req.headers.authorization;
    
    //Split the string from the Bearer word and get the second index
const token=authH.split(" ")[1];
console.log(token)
    if(!authH){
        return res.status(401).json({
            message:"No token provided"
        })
    }
    else{
       const checkToken=jwt.verify(token,process.env.SECRETE_KEY);
        console.log(checkToken.role);
if(!checkToken){
   return res.status(401).status.json({
        message:"Token is invalid or has expired! Retry "
    })
}
else{
const {role}=checkToken
console.log(checkToken.role);
console.log(role)
 if(role===false){
   return res.status(403).json({
    message:"Access denied!, You can only edit a blog"
   }) 
}
else{
next();
}
}
    }
   } catch (error) {
    console.log(error)
   }
}
export default allowTodelete