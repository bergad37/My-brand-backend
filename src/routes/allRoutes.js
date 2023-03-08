import express from "express";
import blogRoute from "./blogRoute.js"
import subscriberRoutes from "./subscriberRoutes.js";
import commentRoutes from "./commentRoute.js"
import signupRoutes from "./signupRoutes.js"
import loginRoute from "./loginRoute.js"

const router=express.Router()

router.use("/blogs",blogRoute);
router.use("/followers",subscriberRoutes)
router.use("/comments",commentRoutes);
router.use("/signup",signupRoutes);
router.use("/login",loginRoute)


export default router