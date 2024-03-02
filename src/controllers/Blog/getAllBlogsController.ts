import { Request , Response } from "express";
import BlogModel from "../../models/blogModel";
import * as apiResponse from "../../helper/apiResponse";

const getAllBlogs = async(req:Request , res:Response) =>{
    try{
          const blog = await BlogModel.find()
          if(blog){
            apiResponse.successResponseWithData(res , "blogs found" , blog)
          }
          
            else {
               
                return apiResponse.notFoundResponse(res, "blogs not found");
            }
          }
    catch(err){
        return apiResponse.errorResponseWithData(res,"Error in getting blogs",err)

    }
}

export default getAllBlogs