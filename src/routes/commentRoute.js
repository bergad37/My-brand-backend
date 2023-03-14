import express from "express"
import commentController from "../controllers/commentController.js"



const router=express.Router();


router.post("/",commentController.comment);
router.get("/",commentController.getComments)

export default router