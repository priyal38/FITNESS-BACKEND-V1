import mongoose, { Document } from 'mongoose';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}


interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  gender: Gender;
  profilePhoto?: string;
  height?: number;
  role?: number;
  dob?: Date;
  weight?: number;
 
}

const userSchema = new mongoose.Schema<User>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: Object.values(Gender) },
  profilePhoto: { type: String },
  height: { type: Number },
  role: { type:Number , default:0 }, 
  dob: { type: Date },
  weight: { type: Number },
  
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
