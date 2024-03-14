import { Request , Response } from "express";
import HealthyRecipesModel from "../../models/healthRecipes";
import * as apiResponse from "../../helper/apiResponse";

const getAllRecipes = async(req:Request , res:Response) =>{
    try{
          const recipes= await HealthyRecipesModel.find()
          if(recipes){
            apiResponse.successResponseWithData(res , "Recipes found" ,recipes )
          }
          
            else {
               
                return apiResponse.notFoundResponse(res, "recipes not found");
            }
          }
    catch(err){
        return apiResponse.errorResponseWithData(res,"Error in getting recipes",err)

    }
}

export default getAllRecipes