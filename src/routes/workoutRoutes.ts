import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
const workout= express.Router();

workout.post('/addworkout' , addWorkout);

export default workout;