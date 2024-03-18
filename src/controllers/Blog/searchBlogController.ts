// searchController.ts

import { Request, Response } from 'express';
import BlogModel from '../../models/blogModel';
import * as apiResponse from '../../helper/apiResponse';

const searchBlogs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query?.page as string) || 1;
    const perPage = parseInt(req.query?.perPage as string) || 3;
    const query = req.query?.query as string 

    if (!query) {
      return apiResponse.errorResponse(res, 'Search query parameter  is required');
    }

    let blogQuery = BlogModel.find();
    blogQuery = blogQuery.or([
        { title: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } }
    ]);

    const totalBlogs = await BlogModel.countDocuments(blogQuery);
    const blogs = await blogQuery
        .skip((page - 1) * perPage)
        .limit(perPage);

   


    if (blogs.length > 0) {
      apiResponse.successResponseWithData(res, 'Search results found', {
        blogs,
        currentPage: page,
        totalPages: Math.ceil(totalBlogs / perPage)
      });
    } else {
      apiResponse.notFoundResponse(res, 'No matching blogs found');
    }
  } catch (error) {
    console.error('Error searching blogs:', error);
    apiResponse.errorResponse(res, 'Internal server error');
  }
};

export default searchBlogs;
