import mongoose, { Schema, Document } from 'mongoose';


export interface Ingredient {
  name: string;
  quantity: string;

}

export interface HealthyRecipes extends Document {
  title: string;
  description?: string;
  mealType?: string;
  dietaryType?: string;
  prepTime: number;
  cookTime: number;
  calories: number;
  carbohydrates: number;
  protein: number;
  totalfat: number
  ingredients: Ingredient[];
  instructions: string[];
  image: string
}

const HealthyRecipesSchema = new mongoose.Schema<HealthyRecipes>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mealType: { type: String, required: true },
  dietaryType: { type: String, required: true },
  prepTime: { type: Number, required: true },
  cookTime: { type: Number, required: true },
  calories: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  protein: { type: Number, required: true },
  totalfat: { type: Number, required: true },
  ingredients: [{
    name: { type: String, required: true },
    quantity: { type: String, required: true },

  }],
  instructions: [{ type: String, required: true }],
  image: { type: String, required: true }
});

const HealthyRecipesModel = mongoose.model<HealthyRecipes>("HealthyRecipes", HealthyRecipesSchema)

export default HealthyRecipesModel