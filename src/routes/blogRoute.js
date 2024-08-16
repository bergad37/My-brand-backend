import express from "express";
import blogController from "../controllers/blogController.js";
import authorize from "../middleware/restricDelete.js"


const router = express.Router();

router.get("/", authorize, blogController.getBlogs);
router.get("/:id", authorize, blogController.getOneBlog);
router.post("/", authorize, blogController.createBlogs);
router.put("/:id", authorize, blogController.updateBlogs);
router.delete("/:id", authorize, blogController.deleteBlog)


export default router