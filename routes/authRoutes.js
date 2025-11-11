import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { loginValidator } from "../validation/authValidation.js";
import handleValidation from "../middleware/handleValidation.js";
const route = Router();

route.post("/register",register)
route.post("/login",loginValidator,handleValidation, login);
export default route;