import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";

const authorRoute = Router();

authorRoute.use(auth);

authorRoute.get("/me",(req,res)=>{
    res.status(200).json({user:req.auth})
})
authorRoute.get("/dashboard",(req,res)=>{
    res.send("berhasil");
});

export default authorRoute;