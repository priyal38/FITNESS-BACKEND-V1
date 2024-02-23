
import express from 'express';
import {json} from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";
import connection from './db';
import indexroute from './routes/index'
  
 
connection();
 
const app = express();
app.use(json());
app.use(cors())
 

app.use('/api', indexroute)
const PORT = 5000;
 
app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})