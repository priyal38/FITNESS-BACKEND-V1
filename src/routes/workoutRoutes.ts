import express from "express";
import addWorkout from "../controllers/Workout/addWorkoutController";
// import upload from "../helper/multerConfig";
const workout= express.Router();

workout.post('/addworkout' , addWorkout);

export default workout;