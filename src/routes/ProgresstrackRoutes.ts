import express from "express"


import getWorkoutDataByDate from "../controllers/ProgressTrack/getTableDataByDate";
import updateCompletionStatus from "../controllers/ProgressTrack/updateCompletionStatus";
import verifyToken from "../middleware/tokenValidation";
import addUserWorkout from "../controllers/ProgressTrack/addUserWorkoutController";
import getChartDataByDate from "../controllers/ProgressTrack/getChartDataController";
import updateTabledata from "../controllers/ProgressTrack/updateTableDataController";




const progress = express.Router();

progress.get("/getdata",verifyToken, getWorkoutDataByDate )
progress.get("/getchartdata",verifyToken, getChartDataByDate )
progress.post("/adduserworkout" , verifyToken , addUserWorkout)

progress.put("/updateCompletionStatus" , verifyToken, updateCompletionStatus)
progress.put("/updatetabledata/:id" , verifyToken , updateTabledata)


export default progress;