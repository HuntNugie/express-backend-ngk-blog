import {body} from "express-validator";

export const loginValidator = [
    body("email")
    .notEmpty().withMessage("email wajib di isi")
    .isEmail().withMessage("harus berformat email"),
    body("password")
    .notEmpty().withMessage("password tidak boleh kosong")
]