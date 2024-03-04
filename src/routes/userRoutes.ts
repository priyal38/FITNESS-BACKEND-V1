import express from "express"
import getUserProfile from '../controllers/User/getUserProfile'
import tokenValidation from "../middleware/tokenValidation"
import updateUser from "../controllers/User/updateUser";
import getAllUsers from "../controllers/User/getAllUser";

const user = express.Router();

user.get('/profile/:id'  ,  getUserProfile)
user.get("/profile" , tokenValidation  ,getAllUsers)
user.put('/updateUser'  ,  updateUser)

export default user;