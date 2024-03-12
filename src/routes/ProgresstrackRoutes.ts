import express from "express"
import addCustomWorkout from "../controllers/ProgressTrack/customWorkout";
import addPredefinedWorkout from "../controllers/ProgressTrack/addPrefdefinedController";
// import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";
import updateCountOfCompletedDays from "../controllers/ProgressTrack/UpdateCount";
import getWorkoutDataByDate from "../controllers/ProgressTrack/getDyanamic";
import updateCompletionStatus from "../controllers/ProgressTrack/update";
import verifyToken from "../middleware/tokenValidation";




const progress = express.Router();
progress.post("/addpredefined", verifyToken,addPredefinedWorkout )
progress.post("/addcustom",verifyToken,addCustomWorkout )
progress.get("/getdata",verifyToken, getWorkoutDataByDate )
progress.put("/incrementCompletedCount/:type/:id" , updateCountOfCompletedDays)
progress.put("/updateCompletionStatus" , updateCompletionStatus)


export default progress;