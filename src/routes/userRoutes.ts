import express from "express"
import getUserProfile from '../controllers/User/getUserProfile'
import tokenValidation from "../middleware/tokenValidation"
import updateUser from "../controllers/User/updateUser";

const user = express.Router();

user.get('/profile/:id'  ,  getUserProfile)
user.put('/updateUser'  ,  updateUser)

export default user;