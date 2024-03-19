import { Request , Response } from "express";
import HealthyRecipesModel from "../../models/healthRecipes";
import * as apiResponse from "../../helper/apiResponse";

const getAllRecipes = async(req:Request , res:Response) =>{
    try{

      const page = parseInt(req.query?.page as string) || 1;
      const perPage = parseInt(req.query?.perPage as string) || 3;
      const query = req.query?.q as string || '';

      let recipeQuery = HealthyRecipesModel.find();

      if(query){
        recipeQuery = recipeQuery.or([

          // /b {word boundry marker} This will make sure that the search matches the query as a whole word, rather than part of a larger word.
          { title: { $regex: '\\b' + query + '\\b', $options: 'i' } },
          { mealType:{ $regex: '\\b' + query + '\\b', $options: 'i' } },
          { dietaryType:{ $regex: '\\b' + query + '\\b', $options: 'i' } },
          
      ]);
      }


      const totalRecipe = await HealthyRecipesModel.countDocuments(recipeQuery);
      
      
      const recipes = await recipeQuery
          .skip((page - 1) * perPage)
          .limit(perPage);



      if (recipes.length > 0) {
        apiResponse.successResponseWithData(res, "Recipe found", {
          recipes,
            currentPage: page,
            totalPages: Math.ceil(totalRecipe/ perPage)
        });

    } else {
        apiResponse.notFoundResponse(res, "Recipe not found");
    }
          }
    catch(err){
      return apiResponse.errorResponseWithData(res, "Error in getting recipes", err);

    }
}

export default getAllRecipes