import Comment from "../model/contactForm.js"
class commentController {
    static async comment(req, res) {
        const { name, email, message } = req.body;
        const messenger = await Comment.create({ name, email, message });
        res.status(201).json({
            message: "Message sent successfully",
            data: messenger
        })
    }
    static async getComments(req, res) {
        try {
            const messengers = await Comment.find();
            return res.status(200).json({
                message: "The messages",
                data: messengers
            })
        } catch (error) {
            return res.status(500).json({
                message: "Server error"
            })
        }
    }
}

export default commentController;