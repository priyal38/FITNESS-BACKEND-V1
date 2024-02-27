import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as apiResponse from "../../helper/apiResponse";
import WorkoutModel from "../../models/workoutModel";
import { upload } from "../../helper/multerConfig";


const addWorkout = [

  upload.single('thumbnail'),


  body("title")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("title is required"),
  body("category")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("category is required"),
  body("explanation")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("explanation is required"),
  body("difficultyLevel")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("difficultyLevel is required"),
  body("videoUrl")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("video required"),

    

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
      category,
      subCategory,
      explanation,
      difficultyLevel,
      videoUrl,
    } = req.body;
    try {
      const workout = await WorkoutModel.create({
        title,
        category,
        subCategory,
        explanation,
        difficultyLevel,
        thumbnail:req.file?.path,
        videoUrl,
      });
      workout.save();

      if (workout) {
        return apiResponse.successResponse(res, "new workout added");
      }
    } catch (error) {
      console.log(error);
      apiResponse.errorResponse(res, " workout not  added");
    }
  },
];

export default addWorkout;

