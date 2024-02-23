
import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/userModel';

interface customRequest extends Request {
    user:any;
    }
export const isAdmin = async (req:customRequest,res:Response,next:NextFunction)=>{
    try {
        const user = await UserModel.findById(req.user._id)
        if(user?.role !== 1){
           return res.status(400).send({
            success : false,
            message : "Unauthorized Access"
           })
        }else{
            next();
        }
    } catch (error) {
        
        console.log(error);
    }
}