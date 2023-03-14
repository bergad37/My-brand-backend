import User from "../model/signup.js"
import bcrypt from "bcrypt"
const signupController=async (req,res) =>{

const {firstname,lastname,email,password,isAdmin}=req.body
try {
    const encryptPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({firstname,lastname,email,password: encryptPassword,isAdmin});
        console.log(newUser);
    return res.status(201).json({
        message:"Account successful created",
        data: newUser,
    })
} catch (error) {
    console.log(error);
    if(error.code===11000){
   return  res.status(404).json({
        message:"Email already exist"
    })
    }
    else{
    return res.status(500).json({
        message:"Registration failure"
    })
};
}
}
export default signupController

