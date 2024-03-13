"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getUserProfile_1 = __importDefault(require("../controllers/User/getUserProfile"));
const tokenValidation_1 = __importDefault(require("../middleware/tokenValidation"));
const updateUser_1 = __importDefault(require("../controllers/User/updateUser"));
const getAllUser_1 = __importDefault(require("../controllers/User/getAllUser"));
const user = express_1.default.Router();
user.get('/profile/:id', getUserProfile_1.default);
user.get("/profile", tokenValidation_1.default, getAllUser_1.default);
user.put('/updateUser', updateUser_1.default);
exports.default = user;
