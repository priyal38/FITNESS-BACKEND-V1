import mongoose, { Schema, Document, ObjectId } from "mongoose";


interface UserWorkout extends Document {
    userId:mongoose.Types.ObjectId
    predefinedWorkouts:[],
    userdefinedWorkouts:[]
   
}
const userWorkoutSchema = new mongoose.Schema<UserWorkout>({
    
    userId:{type: Schema.Types.ObjectId, ref: 'User', required: true},
    predefinedWorkouts:[{
        workoutId :{ type: Schema.Types.ObjectId ,  ref: 'User', required: true },
        target : {type:Number , required:true},
        completedDays : {type:Number , required:true},
        startDate : {type:Date },
        endDate :{type:Date}
    }],
    userdefinedWorkouts:[{
        workoutId :{ type: Schema.Types.ObjectId ,  ref: 'User', required: true },
        target : {type:Number , required:true},
        completedDays : {type:Number , required:true},
        startDate : {type:Date },
        endDate :{type:Date}
    }],

});

const UserWorkoutModel = mongoose.model<UserWorkout>("UserWorkout", userWorkoutSchema);

export default  UserWorkoutModel;
