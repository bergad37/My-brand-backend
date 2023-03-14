import mongoose from "mongoose";


const blogSchema=new mongoose.Schema({
    Author:{
type:String,
required: true,
minLength:3
    },
    title:{
        type:String,
        required: true
    },
    postedAt:{
        type: Date,
        default:Date.now
    },
    message:{
        type: String,
        required: true,
        minLength: 10,
    },
    imageUrl:{
        type:String
    }
   
});

//Exporting our model the collection is called blogs , mode is accessed by Blog
const Blog=mongoose.model("Blog",blogSchema,'blogs')

export default Blog