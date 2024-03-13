"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workoutRoutes_1 = __importDefault(require("./workoutRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const blogRoutes_1 = __importDefault(require("./blogRoutes"));
const recipeRoutes_1 = __importDefault(require("./recipeRoutes"));
const ProgresstrackRoutes_1 = __importDefault(require("./ProgresstrackRoutes"));
const app = (0, express_1.default)();
app.use("/workout", workoutRoutes_1.default);
app.use("/auth", authRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use("/blog", blogRoutes_1.default);
app.use("/recipe", recipeRoutes_1.default);
app.use("/progress", ProgresstrackRoutes_1.default);
exports.default = app;
