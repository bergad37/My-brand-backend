import Subscriber from "../model/sbscribers.js"

class subscriberController{


    static async createSubscriber(req,res){
        try {
            const {email}=req.body;
            const usedMail=await Subscriber.findOne({email});
           
           //When the email is included you have to meesaage the user that the email already exist
           if(usedMail){
           return res.status(404).json({
                message:"user with this email alread exists"
            })
           }
           else {
            const subscriber=await Subscriber.create({email});
          return  res.status(201).json({
             message: "New follower recieved",
             data: subscriber
           })  
        }
        } catch (error) {
            if(error._message==='Subscriber validation failed'){
                res.status(500).json({
                    message:"Email address is required"
                })
            }
            else{
            return res.status(500).json({
                message:"The server error"
            })
        }
    }
    }
    static async getAllSubscribers(req,res){
       
      try {
        const availableFollwers=await Subscriber.find();
        if(availableFollwers != ""){
            res.status(200).json({
                message:"The availblable followers",
                data: availableFollwers
            })
        }else{
            res.status(404).json({
                message:"No followers available"
            })
        }
      } catch (error) {
        res.status(500).json({
            message:"server error"
        })
      }
    }
}


export default subscriberController