import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
import getAllWorkout from "../controllers/Workout/getAllWorkoutController";
const workout= express.Router();

workout.post('/addworkout' , addWorkout);
workout.get('/getworkout' , getAllWorkout);

export default workout;