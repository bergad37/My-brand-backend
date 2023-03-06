import express from "express";
import blogRoute from "./blogRoute.js"
import subscriberRoutes from "./subscriberRoutes.js";
import commentRoutes from "./commentRoute.js"


const router=express.Router()

router.use("/blogs",blogRoute);
router.use("/followers",subscriberRoutes)
router.use("/comments",commentRoutes);


export default router