import express from "express"
import addBlogController from "../controllers/Blog/addBlogController";
import getAllBlogs from "../controllers/Blog/getAllBlogs";



const blog = express.Router();
blog.post("/addblog" ,addBlogController )
blog.get("/getblog" ,getAllBlogs )

export default blog;