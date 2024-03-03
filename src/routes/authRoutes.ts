import express from "express";
import SignUp from '../controllers/Auth/signupController'
import Login from '../controllers/Auth/loginController'
import ForgotPassword from "../controllers/Auth/forgotController";
import schemaValidator from "../middleware/schemaValidator";
const auth = express.Router();



auth.post("/signup", schemaValidator("/signup") , SignUp)
auth.post("/login" , schemaValidator('/login') ,Login )
auth.post("/forgot" ,schemaValidator('/forgot'), ForgotPassword)



export default auth;