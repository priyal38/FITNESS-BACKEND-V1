import { Request , Response } from "express";
import BlogModel from "../../models/blogModel";
import * as apiResponse from "../../helper/apiResponse";

const getAllBlogs = async(req:Request , res:Response) =>{
    try{

      const page = parseInt(req.query?.page as string) || 1;
        const perPage = parseInt(req.query?.perPage as string) || 3;
          
        const totalBlogs = await BlogModel.countDocuments();
        const blogs = await BlogModel.find()
            .skip((page - 1) * perPage)
            .limit(perPage);

        if (blogs.length > 0) {
            apiResponse.successResponseWithData(res, "Blogs found", {
                blogs,
                currentPage: page,
                totalPages: Math.ceil(totalBlogs / perPage)
            });
        } else {
            apiResponse.notFoundResponse(res, "Blogs not found");
        }
          }
    catch(err){
        return apiResponse.errorResponseWithData(res,"Error in getting blogs",err)

    }
}

export default getAllBlogs