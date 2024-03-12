import express from "express"
import addCustomWorkout from "../controllers/ProgressTrack/customWorkout";
import addPredefinedWorkout from "../controllers/ProgressTrack/addPrefdefinedController";
import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";
import verifyToken from "../middleware/tokenValidation";




const progress = express.Router();
progress.post("/addpredefined", verifyToken,addPredefinedWorkout )
progress.post("/addcustom",addCustomWorkout )
progress.get("/getdata",verifyToken, getWorkoutDataByDate )


export default progress;