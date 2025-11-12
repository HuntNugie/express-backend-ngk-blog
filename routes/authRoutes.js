import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { loginValidator, registerValidator } from "../validation/authValidation.js";
import handleValidation from "../middleware/handleValidation.js";
const route = Router();

route.post("/register",registerValidator,handleValidation, register)
route.post("/login",loginValidator,handleValidation, login);
export default route;