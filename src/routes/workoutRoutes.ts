import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
import getAllWorkout from "../controllers/Workout/getAllWorkoutController";
import tokenValidation from "../middleware/tokenValidation"
const workout= express.Router();

workout.post('/addworkout' , addWorkout);
workout.get('/getworkout' , tokenValidation, getAllWorkout);

export default workout;