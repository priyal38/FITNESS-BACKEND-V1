import { Request , Response } from "express";
import WorkoutModel from "../../models/workoutModel";
import * as apiResponse from "../../helper/apiResponse";

const getAllWorkout = async(req:Request , res:Response) =>{
    try{
          const workout = await WorkoutModel.find()
          if(workout){
            apiResponse.successResponseWithData(res , "workouts found" , workout)
          }
          
            else {
               
                return apiResponse.notFoundResponse(res, "workouts not found");
            }
          }
    catch(err){
        return apiResponse.errorResponseWithData(res,"Error in getting workouts",err)

    }
}

export default getAllWorkout