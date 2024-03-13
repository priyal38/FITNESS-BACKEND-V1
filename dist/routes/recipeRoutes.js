"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRecipeController_1 = __importDefault(require("../controllers/HealthRecipes/addRecipeController"));
const recipe = express_1.default.Router();
recipe.post("/addrecipe", addRecipeController_1.default);
exports.default = recipe;
