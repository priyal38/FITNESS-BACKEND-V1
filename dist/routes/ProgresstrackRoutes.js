"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customWorkout_1 = __importDefault(require("../controllers/ProgressTrack/customWorkout"));
const addPrefdefinedController_1 = __importDefault(require("../controllers/ProgressTrack/addPrefdefinedController"));
// import getWorkoutDataByDate from "../controllers/ProgressTrack/getWorkoutDataByDate";
const UpdateCount_1 = __importDefault(require("../controllers/ProgressTrack/UpdateCount"));
const getDyanamic_1 = __importDefault(require("../controllers/ProgressTrack/getDyanamic"));
const updateCompletionStatus_1 = __importDefault(require("../controllers/ProgressTrack/updateCompletionStatus"));
const tokenValidation_1 = __importDefault(require("../middleware/tokenValidation"));
const progress = express_1.default.Router();
progress.post("/addpredefined", tokenValidation_1.default, addPrefdefinedController_1.default);
progress.post("/addcustom", tokenValidation_1.default, customWorkout_1.default);
progress.get("/getdata", tokenValidation_1.default, getDyanamic_1.default);
progress.put("/incrementCompletedCount/:type/:id", UpdateCount_1.default);
progress.put("/updateCompletionStatus/:type", updateCompletionStatus_1.default);
exports.default = progress;
