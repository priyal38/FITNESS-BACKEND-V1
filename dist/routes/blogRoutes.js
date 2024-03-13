"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addBlogController_1 = __importDefault(require("../controllers/Blog/addBlogController"));
const getAllBlogsController_1 = __importDefault(require("../controllers/Blog/getAllBlogsController"));
const blog = express_1.default.Router();
blog.post("/addblog", addBlogController_1.default);
blog.get("/getblog", getAllBlogsController_1.default);
exports.default = blog;
