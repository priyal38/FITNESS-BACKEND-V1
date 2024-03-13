"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addWorkoutController_1 = __importDefault(require("../controllers/Workout/addWorkoutController"));
const getAllWorkoutController_1 = __importDefault(require("../controllers/Workout/getAllWorkoutController"));
const getDynamicWorkout_1 = __importDefault(require("../controllers/Workout/getDynamicWorkout"));
const tokenValidation_1 = __importDefault(require("../middleware/tokenValidation"));
const workout = express_1.default.Router();
workout.post('/addworkout', addWorkoutController_1.default);
workout.get('/getworkout', tokenValidation_1.default, getAllWorkoutController_1.default);
// workout.get('/getdynamicworkout' , tokenValidation, getDynamicWorkout);
workout.get('/getworkout/:id', getDynamicWorkout_1.default);
exports.default = workout;
