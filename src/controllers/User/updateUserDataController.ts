import { Request, Response } from "express";
import UserModel from "../../models/userModel";
import * as apiResponse from "../../helper/apiResponse";

const updateUserData = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user;
        const {
            firstname,
            lastname,
            email,
            gender,
            height,
            role,
            dob,
            weight,
            bio
        } = req.body;

       
        const user = await UserModel.findByIdAndUpdate(userId , {
            firstname,
            lastname,
            email,
            gender,
            height,
            role,
            dob,
            weight,
            bio
        } , {new:true} );
        if (!user) {
            return apiResponse.notFoundResponse(res, "User not found");
        }

       
        // if (firstname !== undefined) {
        //     user.firstname = firstname;
        // }
        // if (lastname !== undefined) {
        //     user.lastname = lastname;
        // }
        // if (email !== undefined) {
        //     user.email = email;
        // }
        // if (gender !== undefined) {
        //     user.gender = gender;
        // }
       
        // if (height !== undefined) {
        //     user.height = height;
        // }
        // if (role !== undefined) {
        //     user.role = role;
        // }
        // if (dob !== undefined) {
        //     user.dob = dob;
        // }
        // if (weight !== undefined) {
        //     user.weight = weight;
        // }
        // if (bio !== undefined) {
        //     user.bio = bio;
        // }

        // Save updated user
        await user.save();

        // Respond with updated user data
        apiResponse.successResponseWithData(res, "User updated successfully", user);
    } catch (err) {
        console.log(err)
        return apiResponse.errorResponseWithData(res, "Error in updating user", err);
    }
};

export default updateUserData;
