import mongoose from "mongoose"

const subscriberSchema=mongoose.Schema({
    email:{
        type:String,
        required: true,
        
    }
})


const Subscriber=mongoose.model("Subscriber",subscriberSchema);

export default Subscriber