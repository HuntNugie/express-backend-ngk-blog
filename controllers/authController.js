import {Users} from "../models/User.model.js";
import {hash,compare} from "bcrypt";
import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();
export const register = async (req, res) => {
    try {
        const {nama, email, password, confirmPass} = req.body;
        const hashedPass = await hash(password, 10);
        // tambahkan
        const data = {
            name: nama,
            email,
            password: hashedPass,
        };
        const tambah = await Users.create({data});
        return res.status(200).json({message: "berhasil menambahkan data",status:true});
    } catch (error) {
        return res.status(400).json({message: error.message,status:false});
    }
};

export const login = async (req, res) => {
    try {
        const {password} = req.body;
        const result = req.user;
        
        // cek apakah password yang ada di user itu benar
        const hasil = await compare(password,result.password);
        if(!hasil){
            return res.status(401).json({message:"username atau password salah"});
        }

        // buat token sudah beres
        const token = jwt.sign({
            "user_id" : result.id
        },process.env.SECRET_JWT,{expiresIn:"10m"});

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            expires: new Date(Date.now() + 1000 * 60 * 10)
        });
        return res.status(200).json({message:"berhasil login",status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"ada masalah : "+error,status:false});
    }
};
