import Comment from "../model/contactForm.js"
class commentController{
    static async comment(req,res){
        const {name,email,message}=req.body;
const messenger=await Comment.create({name,email,message}); 
res.status(201).json({
    message:"New message recieved",
    data: messenger
})
    }
}

export default commentController;