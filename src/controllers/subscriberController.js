import Subscriber from "../model/sbscribers.js"

class subscriberController{


    static async createSubscriber(req,res){
        try {
            const {email}=req.body;
            // const usedMail=await Subscriber.findOne({email});
        //    console.log(usedMail)
           //When the email is included you have to meesaage the user that the email already exist
             const subscriber=await Subscriber.create({email});
          return  res.status(201).json({
             message: "New follower recieved",
             data: subscriber
           })  
        } catch (error) {
            console.log(error)
            if(error.code===11000){
                res.status(500).json({
                    message:"Email already exists"
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