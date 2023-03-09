import User from "../model/signup.js";
import bcrypt from "bcrypt"
import jwt from  "jsonwebtoken"

const loginController=async (req,res)=>{

    const {email,password}=req.body;
try {
   const user=await User.findOne({email})
   if(!user){
    res.status(400).json({
        message:"Invalid credentials"
    })
   }else{
    const checkPassword=await bcrypt.compare(password,user.password);
    if(!checkPassword){
        res.status(400).json({
            message:"Invalid  credentials"
        })
    }
    else{
        const token= jwt.sign({userId: user._id},process.env.SECRETE_KEY)
        res.status(200).json({
            message:"Welcome",
            data:user,
            validToken: token
        })
    }
   }
} catch (error) {
    
}
}

export default loginController