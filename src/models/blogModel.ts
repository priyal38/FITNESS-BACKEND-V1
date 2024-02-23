import mongoose , {Schema, Document} from "mongoose";


interface Blog extends Document {
    title:string,
    content:string,
    author:string,
    category:string,
    thumbnailUrl:string,
   readtime:number
  }
const blogSchema = new mongoose.Schema<Blog>({
    title: { type: String, required: true },
    content: { type:String , required: true },
    author: { type: String, required: true },
    category:{type:String , required:true},
    thumbnailUrl: { type: String, required: true },
    readtime: { type: Number, required: true } 
})

const BlogModel = mongoose.model<Blog>("Blog",blogSchema)
export default BlogModel