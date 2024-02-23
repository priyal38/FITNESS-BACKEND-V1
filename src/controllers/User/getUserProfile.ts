import { Request, Response } from "express";
import UserModel from "../../models/userModel";
import * as apiResponse from "../../helper/apiResponse";

const getUserData= [
    async (req: Request, res: Response) =>{
        try {
            const userId = req.params.userId;
            const user = await UserModel.findById(userId);
            
            if (user) {
                apiResponse.successResponseWithData(res , "user found" , user)
            } 
            else {
               
                return apiResponse.notFoundResponse(res, "User not found");
            }
        } 
         catch (err) {
            return apiResponse.errorResponseWithData(res,"Error in getting user",err)
        }

    }
    
]
export default getUserData;