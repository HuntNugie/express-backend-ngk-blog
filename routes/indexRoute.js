import { Router } from "express";
import authRoute from "./authRoutes.js"
import authorRoute from "./authorRoute.js";
const indexRoute = Router();

// untuk auth
indexRoute.use("/auth",authRoute);
indexRoute.use("/author",authorRoute)
export default indexRoute;