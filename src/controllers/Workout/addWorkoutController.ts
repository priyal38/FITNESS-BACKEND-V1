import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as apiResponse from "../../helper/apiResponse";
import WorkoutModel from "../../models/workoutModel";


const addWorkout = [
  body("title")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("UserName is required"),
  body("category")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("First Name is required"),
  body("subCategory")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("Last Name is required"),
  body("explanation")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("role is required"),
  body("difficultyLevel")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("role is required"),
  body("thumbnailUrl")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("password_required"),
  body("videoUrl")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("password_required"),

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
      thumbnailUrl,
      videoUrl,
    } = req.body;
    try {
      const workout = await WorkoutModel.create({
        title,
        category,
        subCategory,
        explanation,
        difficultyLevel,
        thumbnailUrl,
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
