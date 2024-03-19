import express from "express"
import addRecipeController from "../controllers/HealthRecipes/addRecipeController"
import getAllRecipes from "../controllers/HealthRecipes/getAllRecipeController"
import getRecipeById from "../controllers/HealthRecipes/getRecipeByIdController"

import verifyToken from "../middleware/tokenValidation"


const recipe = express.Router()
recipe.post("/addrecipe" , addRecipeController)
recipe.get("/getrecipe" , verifyToken, getAllRecipes)
recipe.get("/getrecipe/:id" , verifyToken, getRecipeById)

export default recipe