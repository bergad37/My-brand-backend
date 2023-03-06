import express from "express"
import subscriberController from "../controllers/subscriberController.js"


const router=express.Router();

router.post("/",subscriberController.createSubscriber)
// router.get("/",subscriberController.getSubscribers)

export default router