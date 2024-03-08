import mongoose, { Schema, Document } from "mongoose";

interface CustomWorkout extends Document {
    userId:mongoose.Types.ObjectId
    // workoutId:mongoose.Types.ObjectId
    title:string
    targetDays:number
    completedDays:number
    duration:number
    startDate:Date
    endDate :Date

}

const customWorkoutModel = new mongoose.Schema<CustomWorkout>({
    
    userId:{type: Schema.Types.ObjectId, ref: 'User', required: true},
 
       title:{type:String , required:true},
        targetDays : {type:Number , required:true},
        completedDays : {type:Number , default:0},
        duration:{type:Number , required:true},
        startDate : {type:Date },
        endDate :{type:Date}
    
   

});

const CustomWorkoutModel = mongoose.model<CustomWorkout>("CustomWorkout", customWorkoutModel);

export default  CustomWorkoutModel;

