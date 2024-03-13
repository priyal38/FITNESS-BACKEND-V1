import express from "express"
import addCustomWorkout from "../controllers/ProgressTrack/customWorkout";
import addPredefinedWorkout from "../controllers/ProgressTrack/addPrefdefinedController";
// import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";

import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";
import updateCompletionStatus from "../controllers/ProgressTrack/updateCompletionStatus";
import verifyToken from "../middleware/tokenValidation";




const progress = express.Router();
progress.post("/addpredefined", verifyToken,addPredefinedWorkout )
progress.post("/addcustom",verifyToken,addCustomWorkout )
progress.get("/getdata",verifyToken, getWorkoutDataByDate )

progress.put("/updateCompletionStatus/:type" , updateCompletionStatus)


export default progress;