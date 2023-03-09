import express from "express";
import blogController from "../controllers/blogController.js";
import authorize from "../middleware/restricDelete.js"


const router=express.Router();

router.get("/",blogController.getBlogs);
router.get("/:id",blogController.getOneBlog);
router.post("/",blogController.createBlogs);
router.put("/:id",blogController.updateBlogs);
router.delete("/:id",authorize,blogController.deleteBlog)


export default router