import express from "express"


import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";
import updateCompletionStatus from "../controllers/ProgressTrack/updateCompletionStatus";
import verifyToken from "../middleware/tokenValidation";
import addUserWorkout from "../controllers/ProgressTrack/addUserWorkoutController";




const progress = express.Router();

progress.get("/getdata",verifyToken, getWorkoutDataByDate )
progress.post("/adduserworkout" , verifyToken , addUserWorkout)

progress.put("/updateCompletionStatus" , updateCompletionStatus)


export default progress;