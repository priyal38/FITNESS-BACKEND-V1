import { Request , Response } from "express";
import WorkoutModel from "../../models/workoutModel";
import * as apiResponse from "../../helper/apiResponse";

const getAllWorkout = async(req:Request , res:Response) =>{
    try{
      const page = parseInt(req.query?.page as string) || 1;
      const perPage = parseInt(req.query?.perPage as string) || 6;

      const totalWorkout = await WorkoutModel.countDocuments();
      const workouts = await WorkoutModel.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

      if (workouts.length > 0) {
        apiResponse.successResponseWithData(res, "Workout found", {
          workouts,
            currentPage: page,
            totalPages: Math.ceil(totalWorkout/ perPage)
        });
        
    } else {
        apiResponse.notFoundResponse(res, "Workout not found");
    }
          }
    catch(err){
        return apiResponse.errorResponseWithData(res,"Error in getting workouts",err)

    }
}

export default getAllWorkout