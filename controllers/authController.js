import {Users} from "../models/User.model.js";
import { hash } from "bcrypt";
export const register = async (req, res) => {
    try {
        const {nama, email, password, confirmPass} = req.body;
        if (password !== confirmPass) {
           throw new Error("password dan konfirmasi password tidak sama");
        }
        const hashedPass = await hash(password,10);
        // tambahkan
        const data = {
            name:nama,
            email,
            password:hashedPass,
        };
        const tambah = await Users.create({data});
        return res.status(200).json({message: "berhasil menambahkan data"});
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
};
