import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
import getAllWorkout from "../controllers/Workout/getAllWorkoutController";
import getDynamicWorkout from "../controllers/Workout/getDynamicWorkout";
import tokenValidation from "../middleware/tokenValidation"
const workout= express.Router();

workout.post('/addworkout' , addWorkout);
workout.get('/getworkout' , tokenValidation, getAllWorkout);
// workout.get('/getdynamicworkout' , tokenValidation, getDynamicWorkout);
workout.get('/getworkout/:id' , getDynamicWorkout);

export default workout;