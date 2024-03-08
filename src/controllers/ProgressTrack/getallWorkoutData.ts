import { Request, Response } from 'express';
import PredefinedWorkoutModel from '../../models/progressTrack/predefinedWorkout'
import CustomWorkoutModel from '../../models/progressTrack/customWorkout';
import * as apiResponse from "../../helper/apiResponse";

const getAllWorkoutData = async (req: Request, res: Response) => {
    try {

        const predefinedWorkouts = await PredefinedWorkoutModel.find().populate('workoutId', 'title')


        const customWorkouts = await CustomWorkoutModel.find()


        const allWorkouts = [...predefinedWorkouts, ...customWorkouts];

        if (allWorkouts) {
            apiResponse.successResponseWithData(res, " combine workouts found", allWorkouts)
        }
        else {

            return apiResponse.notFoundResponse(res, "combine workouts not found");
        }

    } catch (error) {
        return apiResponse.errorResponseWithData(res, "Error in getting workouts", error)
    }
};

export default getAllWorkoutData;
