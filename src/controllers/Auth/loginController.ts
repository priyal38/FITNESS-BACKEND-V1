import { Request, Response } from "express";
import * as apiResponse from "../../helper/apiResponse";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import UserModel from "../../models/userModel";
import { comparePass } from "../../helper/passEncDes";


const Login = [
  body("email")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("email is required"),
  body("password")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("password_required"),

  async (req: Request, res: Response) => {

    try{

    const error = validationResult(req);
    if (!error.isEmpty()) {
      apiResponse.validationErrorWithData(
        res,
        "Validation error",
        error.array()
      );
    }

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return apiResponse.errorResponse(res, "Invalid email or password");
    }
    const isPasswordMatch = await comparePass(password, user.password as string);
      if (!isPasswordMatch) {
        return apiResponse.errorResponse(res, "Invalid email or password");
      }

    return apiResponse.sendToken(res, 200 , user)
   
   
  }
  catch (error) {
     return apiResponse.errorResponse(res, 'User not found');
  }

}

];

export default Login;
