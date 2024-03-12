// Import necessary modules and models
import { Request, Response } from "express";
import PredefinedWorkoutModel from "../../models/progressTrack/predefinedWorkout";

// Controller function to update completion status
const updateCompletionStatus = async (req: Request, res: Response) => {
    try {
        const { workoutId, completed , selectedDate } = req.body;

        // Find the predefined workout by ID
        const workout = await PredefinedWorkoutModel.findById(workoutId);

        if (!workout) {
            return res.status(404).json({ success: false, message: "Workout not found" });
        }

        // Update the completion status
        workout.completionStatus.push({ date: new Date(selectedDate), checked: completed });
        workout.completedDays = workout.completionStatus.filter(item => item.checked).length;

        // Save the updated workout
        await workout.save();

        return res.status(200).json({ success: true, message: "Completion status updated successfully" });
    } catch (error) {
        console.error("Error updating completion status:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export default updateCompletionStatus;
