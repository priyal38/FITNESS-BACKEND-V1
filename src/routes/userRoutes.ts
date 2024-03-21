import express from "express"
import getUserProfile from '../controllers/User/getUserProfileController'
import verifyToken from "../middleware/tokenValidation";
import updateUserData from "../controllers/User/updateUserDataController";
import uploadProfilePhoto from "../controllers/User/uploadProfilePhoto";

const user = express.Router();

user.get('/profile', verifyToken ,  getUserProfile)
user.put('/updatedata', verifyToken ,  updateUserData)
user.put('/uploadphoto', verifyToken ,  uploadProfilePhoto)



export default user;