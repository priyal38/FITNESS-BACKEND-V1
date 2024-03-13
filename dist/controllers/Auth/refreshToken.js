"use strict";
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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_REFRESH_SECRET = "priyal";
const JWT_SECRET = "S2k3c0efrsfdsdsdfff2dsasdfd";
const refreshTokenGenerate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = yield req.cookies;
    console.log("cookies reached");
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.refreshtoken))
        return res.sendStatus(401);
    const refreshToken = cookies.refreshtoken;
    // const user = await User.findOne({refreshToken});
    // if(!user){
    //     return res.status(403).json("User is not registered");
    // }
    if (!refreshToken) {
        return res.status(401).send('Access Denied. No refresh token provided.');
    }
    jsonwebtoken_1.default.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401);
        }
        const token = jsonwebtoken_1.default.sign({ userId: decoded._id }, JWT_SECRET, { expiresIn: "1d" });
        res.json({ token });
    });
});
exports.default = refreshTokenGenerate;
