import Blog from "../model/blog.js";
//import blogs from "../model/blogs.js"
class blogController{


    //Get all blogs
    static async getBlogs(req,res){
 try {

    const article=await Blog.find();
  return  res.status(200).json({
    message:"The list of blogs",
        data: article
    })
 } catch (error) {
    console.log(error)
   return res.status(500).json({
        message: "Server error"
    })
 }

 //Create blog function
    }

    static async getOneBlog(req,res){
      try {
        const {id}=req.params;
//const blogId=Number(id);

        const blog=await Blog.findOne({_id:id})

        if(!blog){
            return res.status(404).json({
                message:"The blog not found",
            })
        } else{
            return res.status(200).json({
                message:`Blog with id ${id}: `,
                data: blog
            })
        }
      } catch (error) {
        console.error();
        return res.status(500).json({
             message: "Server error"
         })
      }
    }

static async createBlogs(req,res){
try {
    const {title,Author,message}=req.body;
    const newBlog=await Blog.create({title,Author,message});
   return  res.status(201).json({
        Message: "New blog has been created",
        data: newBlog
    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Server error"
    })
    
}
}
//update my blog
static async updateBlogs(req,res){
    try {
         const {id}=req.params;
        const _id=id;
         // const blogId=Number(id);
        const {title,message}=req.body;
        const blogUpdated=await Blog.findByIdAndUpdate(_id,{title,message},{new:true})
        if (!blogUpdated) {
           return res.status(500).json({
                message:`Blog with id ${id} not found`
            })
        }else{ 
            // blogToUpdate.title=title;
            // blogToUpdate.descripton=description;
            // blogToUpdate.photo=photo;

           return res.status(200).json({
                message: `Blog with id ${id} updated`,
                data: blogUpdated
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}
static async deleteBlog(req,res){
    try {
         const {id} =req.params;
       const _id=id;
       const blogToDelete=await Blog.findByIdAndDelete(_id)
         //  const blogId=Number(id)
        //  const index=blogs.findIndex(blog => blog.id === blogId)
         if(!blogToDelete){
         return res.status(404).json({
         message: `Blogs with id ${_id} not found`
})
         }
         else{
            return res.status(200).json({
                message:`Blog is with id ${_id} is deleted successfully`,
            })
         }
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message:`server error`
        })
    }
}
}

export default blogController