import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
import getAllWorkout from "../controllers/Workout/getAllWorkoutController";
import getWorkoutById from "../controllers/Workout/getWorkoutByIdController";
import getFilterData from "../controllers/Workout/getFilterDataController";

import verifyToken from "../middleware/tokenValidation"
const workout= express.Router();

workout.post('/addworkout' , addWorkout);
workout.get('/getworkout' , verifyToken, getAllWorkout);
workout.get('/getworkout/:id' ,verifyToken, getWorkoutById);
workout.get('/getfilterdata' ,verifyToken, getFilterData);


export default workout;