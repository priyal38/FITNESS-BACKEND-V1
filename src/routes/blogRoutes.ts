import express from "express"
import addBlogController from "../controllers/Blog/addBlogController";
import getAllBlogs from "../controllers/Blog/getAllBlogsController";
import getBlogById from "../controllers/Blog/getBlogByIdController";

import verifyToken from "../middleware/tokenValidation";



const blog = express.Router();
blog.post("/addblog",addBlogController )
blog.get("/getblog",verifyToken ,getAllBlogs )
blog.get("/getblog/:id",verifyToken ,getBlogById )


export default blog;