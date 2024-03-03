import express from "express"
import addRecipeController from "../controllers/HealthRecipes/addRecipeController"


const recipe = express.Router()
recipe.post("/addrecipe" , addRecipeController)
export default recipe