import { Router } from "express";
import authRoute from "./authRoutes.js"
const indexRoute = Router();

// untuk auth
indexRoute.use("/auth",authRoute);

export default indexRoute;