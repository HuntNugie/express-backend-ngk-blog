import { validationResult } from "express-validator";

export default function handleValidation(req,res,next){
    const valid = validationResult(req);
    if(!valid.isEmpty()){
        return res.status(400).json({
            message:valid.array()
        });
    }
    next();
}