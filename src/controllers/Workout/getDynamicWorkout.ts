import { Request , Response } from "express";
import WorkoutModel from "../../models/workoutModel";
import * as apiResponse from "../../helper/apiResponse";

const getDynamicWorkout = async(req:Request , res:Response) =>{

    // const id = req.params.id;
    try{
        const workout = await WorkoutModel.findById(req.params.id);
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

export default getDynamicWorkout