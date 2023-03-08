import express from "express"
import loginController from "../controllers/loginController.js"
import authorize from "../middleware/restricDelete.js"


const router=express.Router();
router.post("/", loginController)
export default router