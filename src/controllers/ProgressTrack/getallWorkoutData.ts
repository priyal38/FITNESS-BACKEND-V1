import { Request, Response } from 'express';
import PredefinedWorkoutModel from '../../models/progressTrack/predefinedWorkout';
import CustomWorkoutModel from '../../models/progressTrack/customWorkout';
import * as apiResponse from "../../helper/apiResponse";

const getAllWorkoutData = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user; // Assuming this correctly holds the user ID

        // Find predefined workouts for the user
        const predefinedWorkouts = await PredefinedWorkoutModel.find({ userId }).populate('workoutId', 'title');

        // Find custom workouts for the user
        const customWorkouts = await CustomWorkoutModel.find({ userId });

        // Combine predefined and custom workouts
        const allWorkouts = [...predefinedWorkouts, ...customWorkouts];

        if (allWorkouts.length > 0) {
            apiResponse.successResponseWithData(res, "Workouts found", allWorkouts);
        } else {
            apiResponse.notFoundResponse(res, "Workouts not found");
        }
    } catch (error) {
        apiResponse.errorResponseWithData(res, "Error in getting workouts", error);
    }
};

export default getAllWorkoutData;
