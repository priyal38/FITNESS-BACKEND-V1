import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";
import CustomWorkoutModel from "../../models/progressTrack/customWorkout";

const getWorkoutDataByDate = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user;
        const selectedDateStr = req.query.selectedDate as string;
        const selectedDate = new Date(selectedDateStr);
        console.log(selectedDate)
        // Find predefined workouts for the user where the selected date falls within the range
        const predefinedWorkouts = await PredefinedWorkoutModel.find({
            userId,
            startDate: { $lte: selectedDate },
            endDate: { $gte: selectedDate }
        }).populate('workoutId', 'title');

      
        const customWorkouts = await CustomWorkoutModel.find({
            userId,
            startDate: { $lte: selectedDate },
            endDate: { $gte: selectedDate }
        });

    
        const allWorkouts = [...predefinedWorkouts, ...customWorkouts];

        if (allWorkouts) {
            // Check completion status for each workout for the selected date
            const workoutsWithCompletionStatus = allWorkouts.map(workout => {

                const completionStatus = workout.completionStatus.find(status => {
                    console.log('status.date:', status.date.toDateString());
                    console.log('selectedDate:', new Date(selectedDate).toDateString());
                    return status.date.toDateString() === new Date(selectedDate).toDateString();
                });
               
                return {
                    ...workout.toObject(),
                    completed: completionStatus ? completionStatus.checked : false // Set completed based on completion status
                };
            });

            return apiResponse.successResponseWithData(res, "Workouts found for selected date", workoutsWithCompletionStatus);
        } 
    } catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, "Error in getting workouts for the selected date");
    }
};

export default getWorkoutDataByDate;
