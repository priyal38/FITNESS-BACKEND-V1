import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";


const addPredefinedWorkout = async(req:Request , res:Response) =>{

    try{
        const userId = (req as any).user;
        const{ targetDays , duration , workoutId , startDate} = req.body

        const endDate = new Date(startDate)
        endDate.setDate(endDate.getDate() + parseInt(targetDays))


        const newPredefinedWorkout  = await PredefinedWorkoutModel.create({
            userId,targetDays,duration,workoutId, startDate, endDate
        })
        newPredefinedWorkout.save();

        if (newPredefinedWorkout) {
            return apiResponse.successResponse(res, "predefined workout added");
        }

    }
    catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, " predefined workout not added ");
    }
}

export default addPredefinedWorkout