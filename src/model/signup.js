import mongoose from "mongoose";
import bcrypt from "bcrypt"

const signupSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
type:String,
required: true,
unique:true
    },

    password:{
        type:String,
        required: true,
        minLength: 8
    }
})
const User=mongoose.model("User",signupSchema,'users');

export default User