import mongoose, { Schema, Document } from "mongoose";

interface PredefinedWorkout extends Document {
    userId:mongoose.Types.ObjectId
    workoutId:mongoose.Types.ObjectId
    targetDays:number
    completedDays:number
    duration:number
    startDate:Date
    endDate :Date

}

const predefinedWorkoutModel = new mongoose.Schema<PredefinedWorkout>({
    
    userId:{type: Schema.Types.ObjectId, ref: 'User', required: true},
 
        workoutId :{ type: Schema.Types.ObjectId ,  ref: 'Workout', required: true },
        targetDays : {type:Number , required:true},
        completedDays : {type:Number , default:0},
        duration:{type:Number , required:true},
        startDate : {type:Date },
        endDate :{type:Date}
    
   

});

const PredefinedWorkoutModel = mongoose.model<PredefinedWorkout>("PredefinedWorkout", predefinedWorkoutModel);

export default  PredefinedWorkoutModel;

