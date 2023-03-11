import mongoose from "mongoose";

const signupSchema=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
type:String,
unique:true
    },

    password:{
        type:String,
        minLength: 8
    },
    isAdmin:{
type: Boolean,
default:false
    }
})
const User=mongoose.model("User",signupSchema,'users');

export default User