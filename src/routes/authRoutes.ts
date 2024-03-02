import express from "express";
import SignUp from '../controllers/Auth/signupController'
import Login from '../controllers/Auth/loginController'
import ForgotPassword from "../controllers/Auth/forgotController";
const auth = express.Router();



auth.post("/signup" , SignUp)
auth.post("/login" ,Login )
auth.post("/forgot" , ForgotPassword)



export default auth;