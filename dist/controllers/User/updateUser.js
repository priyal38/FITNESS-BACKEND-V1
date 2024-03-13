"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../models/userModel"));
const apiResponse = __importStar(require("../../helper/apiResponse"));
const express_validator_1 = require("express-validator");
const updateUser = [
    (0, express_validator_1.body)('firstname').optional().notEmpty().withMessage('First name is required'),
    (0, express_validator_1.body)('lastname').optional().notEmpty().withMessage('Last name is required'),
    (0, express_validator_1.body)('email').optional().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    (0, express_validator_1.body)('gender').optional().notEmpty().withMessage('Gender is required'),
    (0, express_validator_1.body)('profilePhoto').optional().notEmpty().withMessage('Profile photo is required'),
    (0, express_validator_1.body)('height').optional().notEmpty().withMessage('Height is required').isNumeric().withMessage('Height must be a number'),
    (0, express_validator_1.body)('dob').optional().notEmpty().withMessage('Date of birth is required').isISO8601().withMessage('Invalid date format'),
    (0, express_validator_1.body)('weight').optional().notEmpty().withMessage('Weight is required').isNumeric().withMessage('Weight must be a number'),
    (0, express_validator_1.body)('bloodtype').optional().notEmpty().withMessage('Blood type is required'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const error = (0, express_validator_1.validationResult)(req);
            if (!error.isEmpty()) {
                apiResponse.validationErrorWithData(res, "Validation error", error.array());
            }
            const userId = req.params.userId;
            const user = yield userModel_1.default.findById(userId);
            if (!user) {
                return apiResponse.notFoundResponse(res, "User not found");
            }
            if (req.body.firstname)
                user.firstname = req.body.firstname;
            if (req.body.lastname)
                user.lastname = req.body.lastname;
            if (req.body.email)
                user.email = req.body.email;
            if (req.body.gender)
                user.gender = req.body.gender;
            if (req.body.profilePhoto)
                user.profilePhoto = req.body.profilePhoto;
            if (req.body.height)
                user.height = req.body.height;
            if (req.body.dob)
                user.dob = req.body.dob;
            if (req.body.weight)
                user.weight = req.body.weight;
            const updatedUser = yield user.save();
            return apiResponse.successResponseWithData(res, "user found", updatedUser);
        }
        catch (error) {
            apiResponse.errorResponse(res, 'user not updated');
        }
    })
];
exports.default = updateUser;
