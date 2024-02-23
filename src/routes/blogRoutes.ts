import express from "express"
import addBlogController from "../controllers/Blog/addBlogController";



const blog = express.Router();
blog.post("/addblog" ,addBlogController )

export default blog;