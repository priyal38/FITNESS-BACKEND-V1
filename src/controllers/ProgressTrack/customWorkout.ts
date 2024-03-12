import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import CustomWorkoutModel from "../../models/progressTrack/customWorkout";


const addCustomWorkout = async(req:Request , res:Response) =>{

    try{
        const userId = (req as any).user
        const{  targetDays , duration , title , startDate} = req.body

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + parseInt(targetDays));


        const newCustomWorkout  = await CustomWorkoutModel.create({
            userId,targetDays,duration,title, startDate, endDate
        })
        newCustomWorkout.save();

        if (newCustomWorkout) {
            return apiResponse.successResponse(res, "custom workout added");
        }

    }
    catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, " custom workout not added ");
    }
}

export default addCustomWorkout