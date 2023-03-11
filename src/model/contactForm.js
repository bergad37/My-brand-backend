import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
    },
    email:{
        type:String,
        lowercase:true,
    },
    message:{
        type:String,
    }
})




const Comment=mongoose.model("Comment",commentSchema)


export default Comment;