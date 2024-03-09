import express from "express"
import addCustomWorkout from "../controllers/ProgressTrack/customWorkout";
import addPredefinedWorkout from "../controllers/ProgressTrack/addPrefdefinedController";
import getAllWorkouts from "../controllers/ProgressTrack/getallWorkoutData";
import verifyToken from "../middleware/tokenValidation";




const progress = express.Router();
progress.post("/addpredefined", verifyToken,addPredefinedWorkout )
progress.post("/addcustom",addCustomWorkout )
progress.get("/getdata",getAllWorkouts )


export default progress;