"use strict";
// import { Request, Response } from "express";
// import axios from "axios";
// import WorkoutModel from '../../models/workoutModel';
// const getWorkouts = async (req: Request, res: Response) => {
//     try {
//         const options = {
//             method: 'GET',
//             url: 'https://work-out-api1.p.rapidapi.com/search',
//             headers: {
//                 'X-RapidAPI-Key': '64419f4f66msh628ffc0a60e2a66p1e0d6ejsnb2338b118680',
//                 'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
//             }
//         };
//         const response = await axios.request(options);
//         console.log('API Response:', response.data);
//         const workouts = response.data;
//         // Save each workout to the database
//         const savedWorkouts = await Promise.all(workouts.map(async (workout: any) => {
//             try {
//                 const newWorkout = new WorkoutModel({
//                     // Map properties from each object in the array to your WorkoutModel schema
//                     muscles: workout.Muscles,
//                     workout: workout.WorkOut,
//                     intensity_level: workout.Intensity_Level,
//                     beginner_sets: workout['Beginner Sets'],
//                     intermediate_sets: workout['Intermediate Sets'],
//                     expert_sets: workout['Expert Sets'],
//                     equipment: workout.Equipment,
//                     explanation: workout. Explaination,
//                     long_explanation: workout['Long Explanation'],
//                     video: workout.Video
//                     // Include other properties as needed
//                 });
//                 return await newWorkout.save();
//             } catch (error) {
//                 console.error('Error saving workout:', error);
//                 throw error;
//             }
//         }));
//         // console.log('Workouts saved to database:', savedWorkouts);
//         res.status(200).json(savedWorkouts);
//     } catch (error) {
//         console.error('Error fetching or saving data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };
// export default getWorkouts;
