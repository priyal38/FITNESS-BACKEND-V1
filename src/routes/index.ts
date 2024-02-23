import express from "express";
import workoutRoute from './workoutRoutes'
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import blogRoutes from "./blogRoutes"

const app = express();

app.use("/workout", workoutRoute);
app.use("/auth",authRoutes)
app.use("/user" , userRoutes)
app.use("/blog" , blogRoutes)


export default app;