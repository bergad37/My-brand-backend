import mongoose from "mongoose";

const commentSchema=mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const Comment=mongoose.model("Comment",commentSchema)


export default Comment;