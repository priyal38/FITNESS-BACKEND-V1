import { Request, Response } from 'express';
import UserModel from '../../models/userModel';
import * as apiResponse from "../../helper/apiResponse";
import { body, validationResult } from 'express-validator';

 const updateUser =[
    body('firstname').optional().notEmpty().withMessage('First name is required'),
    body('lastname').optional().notEmpty().withMessage('Last name is required'),
    body('email').optional().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
   
    body('gender').optional().notEmpty().withMessage('Gender is required'),
    body('profilePhoto').optional().notEmpty().withMessage('Profile photo is required'),
    body('height').optional().notEmpty().withMessage('Height is required').isNumeric().withMessage('Height must be a number'),
    body('dob').optional().notEmpty().withMessage('Date of birth is required').isISO8601().withMessage('Invalid date format'),
    body('weight').optional().notEmpty().withMessage('Weight is required').isNumeric().withMessage('Weight must be a number'),
    body('bloodtype').optional().notEmpty().withMessage('Blood type is required'),
 
 
 async (req: Request, res: Response) => {
    try {

        const error = validationResult(req);
        if (!error.isEmpty()) {
          apiResponse.validationErrorWithData(
            res,
            "Validation error",
            error.array()
          );
        }
        const userId = req.params.userId; 


        const user = await UserModel.findById(userId);
        if (!user) {
            return apiResponse.notFoundResponse(res, "User not found");
        }
    
        if (req.body.firstname) user.firstname = req.body.firstname;
        if (req.body.lastname) user.lastname = req.body.lastname;
        if (req.body.email) user.email = req.body.email;
        
        if (req.body.gender) user.gender = req.body.gender;
        if (req.body.profilePhoto) user.profilePhoto = req.body.profilePhoto;
        if (req.body.height) user.height = req.body.height;
        if (req.body.dob) user.dob = req.body.dob;
        if (req.body.weight) user.weight = req.body.weight;
 
        const updatedUser = await user.save();
        return apiResponse.successResponseWithData(res , "user found" , updatedUser)

    } catch (error) {
       apiResponse.errorResponse(res , 'user not updated');
    }
}
 ]

export default updateUser;
