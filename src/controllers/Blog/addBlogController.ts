import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as apiResponse from "../../helper/apiResponse";
import BlogModel from "../../models/blogModel";



const addBlog = [
  body("title")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("title is required"),
  body("content")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("content is required"),
  body("author")
    .notEmpty({ ignore_whitespace: true })
    .withMessage(" author is required"),
  body("category")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("category is required"),
  body("thumbnailUrl")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("image required"),
  body("readtime")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("read time required"),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationErrorWithData(
        res,
        "Validation Error",
        errors.array()
      );
    }

    const {
     title,
     content,
     author,
     category,
     thumbnailUrl,
   readtime
    } = req.body;
    try {
      const blog = await BlogModel.create({
        title,
        content,
        author,
        category,
        thumbnailUrl,
        readtime
      });
      blog.save();

      if (blog) {
        return apiResponse.successResponse(res, "new blog added");
      }
    } catch (error) {
      console.log(error);
      apiResponse.errorResponse(res, " blog not added");
    }
  },
];

export default addBlog;  
