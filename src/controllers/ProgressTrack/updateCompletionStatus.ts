// Import necessary modules and models
import { Request, Response } from "express";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";
import CustomWorkoutModel from "../../models/progressTrack/customWorkout";
import * as apiResponse from "../../helper/apiResponse";

// Controller function to update completion status
const updateCompletionStatus = async (req: Request, res: Response) => {
    try {
        const { workoutId, completed , selectedDate } = req.body;
        const { type } = req.params; 

        let workout;
        if (type === 'predefined') {
            workout = await PredefinedWorkoutModel.findById(workoutId);
        } else if (type === 'custom') {
            workout = await CustomWorkoutModel.findById(workoutId);
        }
        // const workout = await WorkoutModel.findById(workoutId);

        if (!workout) {
            return apiResponse.notFoundResponse(res , 'Workout not found');
        }

        // Update the completion status
        workout.completionStatus.push({ date: new Date(selectedDate), checked: completed });
        workout.completedDays = workout.completionStatus.filter(item => item.checked).length;

        // Save the updated workout
        await workout.save();

        return apiResponse.successResponse(res , 'Completion status updated successfully')
    } catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, "Error in updating workouts for the selected date");
    }
};

export default updateCompletionStatus;
