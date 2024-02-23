import mongoose , {Schema, Document} from "mongoose";


interface Nutrition extends Document {
    title:string,
    content:string,
    author:string,
    category:string,
    thumbnailUrl:string,
    publishDate?:string
  }
const nutritionSchema = new mongoose.Schema<Nutrition>({
    title: { type: String, required: true },
    content: { type:String , required: true },
    author: { type: String, required: true },
    category:{type:String , required:true},
    thumbnailUrl: { type: String, required: true },
    publishDate:{type:Date}
})

const nutritionModel = mongoose.model<Nutrition>("Nutrition",nutritionSchema)
export default nutritionModel