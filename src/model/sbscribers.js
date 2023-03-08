import mongoose from "mongoose"

const subscriberSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase:true
        
    }
})


const Subscriber=mongoose.model("Subscriber",subscriberSchema,'subscribers');

export default Subscriber