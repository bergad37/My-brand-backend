import User from "../model/signup.js";
import bcrypt from "bcrypt"
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
        res.status(200).json({
            message:"Welcome",
            data:user
        })
    }
   }
} catch (error) {
    
}
}

export default loginController