import express from "express";
import SignUp from '../controllers/Auth/signupController'
import Login from '../controllers/Auth/loginController'
const auth = express.Router();



auth.post("/signup" , SignUp)
auth.post("/login" ,Login )



export default auth;