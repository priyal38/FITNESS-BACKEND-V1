import { Request, Response } from "express";
import UserWorkoutModel from "../../models/progressTrack/userWorkoutModel"; // Import the combined schema
import * as apiResponse from "../../helper/apiResponse";

// Controller function to update completion status
const updateCompletionStatus = async (req: Request, res: Response) => {
    try {
        const { workoutId, completed , selectedDate } = req.body;


        // Find the workout by ID
       let workout = await UserWorkoutModel.findById(workoutId);

        if (!workout) {
            return apiResponse.notFoundResponse(res , 'Workout not found');
        }

        // Update the completion status
        workout.completionStatus.push({ date: new Date(selectedDate), checked: completed });
        workout.completedDays = workout.completionStatus.filter(item => item.checked).length;

        // Save the updated workout
        await workout.save();

        return apiResponse.successResponse(res , 'Completion status updated successfully');
    } catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, "Error in updating workouts for the selected date");
    }
};

export default updateCompletionStatus;
