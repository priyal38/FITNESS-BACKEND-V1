import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as apiResponse from "../../helper/apiResponse";
import UserModel from "../../models/userModel";
import { encryptPass } from "../../helper/passEncDes";

const Signup = [

  body("firstname")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("First Name is required"),
  body("lastname")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("Last Name is required"),
  body("email")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),
  body("password")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("password_required"),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationErrorWithData(res,'Validation Error',errors.array(), )
    }

    const { firstname, lastname, email, password } = req.body;
    try {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return apiResponse.AlreadyExists(res, 'User alreasy exist')
      }

      const hashedPassword = await encryptPass(password)
      const user = await UserModel.create({
        firstname,
        lastname,
        email,
      
        password: hashedPassword,
      });
    user.save();
   
      if (user) {
        return apiResponse.successResponse(res , 'User added')

      } 
     
    } 
     catch (error) {
        console.log(error);
        apiResponse.errorResponse(res, 'User Not  Added')
    }
  },
];

export default Signup;
