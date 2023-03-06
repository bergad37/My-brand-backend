import Subscriber from "../model/sbscribers.js"

class subscriberController{


    static async createSubscriber(req,res){
        try {
            const {email}=req.body;
           const subscriber=await Subscriber.create({email});
           //When the email is included you have to meesaage the user that the email already exist
           res.status(201).json({
             message: "New follower recieved",
             data: subscriber
           })  
        } catch (error) {
            res.status(500).json({
                message:"The server error"
            })
        }
    }
}


export default subscriberController