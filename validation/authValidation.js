import {body} from "express-validator";
import {Users} from "../models/User.model.js";
import { compare } from "bcrypt";
export const loginValidator = [
    body("email")
    .notEmpty()
    .withMessage("email wajib di isi")
    .isEmail()
    .withMessage("harus berformat email")
    .custom(async (value, {req}) => {
        const result = await Users.findUnique({
            where: {email: value},
        });
        if (!result) {
            throw new Error("anda harus register terleih dahulu");
        }
        req.user = result;
        return true;
    }),
    body("password")
    .notEmpty()
    .withMessage("password tidak boleh kosong"),
];

export const registerValidator = [
    body("email").notEmpty().withMessage("email wajib di isi").isEmail().withMessage("harus berformat email"),
    body("password").notEmpty().withMessage("password tidak boleh kosong"),
    body("nama").notEmpty().withMessage("nama tidak boleh kosong").isString().withMessage("nama wajib berupa text"),
    body("confirmPass")
    .notEmpty()
    .withMessage("Konfirmasi passsword tidak boleh kosong")
    .custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error("password dan konfirmasi password tidak sama");
        }
        return true;
    }),
];
