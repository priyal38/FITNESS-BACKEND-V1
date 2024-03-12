import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";
import CustomWorkoutModel from "../../models/progressTrack/customWorkout";

const getWorkoutDataByDate = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user;
        const { selectedDate } = req.query;

        // Find predefined workouts for the user where the selected date falls within the range
        const predefinedWorkouts = await PredefinedWorkoutModel.find({
            userId,
            startDate: { $lte: selectedDate },
            endDate: { $gte: selectedDate }
        }).populate('workoutId', 'title');

        // Find custom workouts for the user where the selected date falls within the range
        const customWorkouts = await CustomWorkoutModel.find({
            userId,
            startDate: { $lte: selectedDate },
            endDate: { $gte: selectedDate }
        });

        // Combine predefined and custom workouts
        const allWorkouts = [...predefinedWorkouts, ...customWorkouts];

        if (allWorkouts) {
            return apiResponse.successResponseWithData(res, "Workouts found for selected date", allWorkouts);
        } 
    } catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, "Error in getting workouts for the selected date");
    }
};

export default getWorkoutDataByDate;
