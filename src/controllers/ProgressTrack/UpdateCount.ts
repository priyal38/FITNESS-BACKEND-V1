

import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";
import CustomWorkoutModel from "../../models/progressTrack/customWorkout";
// Endpoint to increment completed count for both predefined and custom workouts

const updateCountOfCompletedDays = async (req: Request, res: Response) => {
    try {
        const { type, id } = req.params;

        if (type === 'predefined') {
            await PredefinedWorkoutModel.findByIdAndUpdate(id, { $inc: { completedDays: 1 } });
        }
        else if (type === 'custom') {
            await CustomWorkoutModel.findByIdAndUpdate(id, { $inc: { completedDays : 1 } });
        }
        else {
            return apiResponse.errorResponse(res, 'Error in updating workout')
        }

        return apiResponse.successResponse(res, "Completed count incremented successfully");
    } catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, "Error in getting workouts for the selected date");
    }
   
}
export default updateCountOfCompletedDays
