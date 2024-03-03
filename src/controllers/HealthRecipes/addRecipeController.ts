import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as apiResponse from "../../helper/apiResponse";
import HealthyRecipesModel from "../../models/healthRecipes";
import { upload } from "../../helper/multerConfig";



const addRecipe = [

    upload.single('image'),

    async (req: Request, res: Response) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return apiResponse.validationErrorWithData(
        //     res,
        //     "Validation Error",
        //     errors.array()
        //   );
        // }

        const {
            title,
            description,
            mealType,
            dietaryType,
            nutritionFacts,
            prepTime,
            cookTime,
            instructions,
            ingredients
        } = req.body;
        try {
            const healthyRecipes = await HealthyRecipesModel.create({
                title,
                description,
                mealType,
                dietaryType,
                prepTime,
                cookTime,
                nutritionFacts,
                instructions,
                ingredients,
                image: req.file?.path
            });
            healthyRecipes.save();

            if (healthyRecipes) {
                return apiResponse.successResponse(res, "new recipe added");
            }
        } catch (error) {
            console.log(error);
            apiResponse.errorResponse(res, " recipe not added");
        }
    },
];

export default addRecipe;  
