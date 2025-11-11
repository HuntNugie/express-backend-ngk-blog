import {Users} from "../models/User.model.js";
import {hash,compare} from "bcrypt";
export const register = async (req, res) => {
    try {
        const {nama, email, password, confirmPass} = req.body;
        if (password !== confirmPass) {
            throw new Error("password dan konfirmasi password tidak sama");
        }
        const hashedPass = await hash(password, 10);
        // tambahkan
        const data = {
            name: nama,
            email,
            password: hashedPass,
        };
        const tambah = await Users.create({data});
        return res.status(200).json({message: "berhasil menambahkan data"});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await Users.findMany({
            where: {email: email},
        });
        
        // cek data
        if(!result){
            return res.status(404).json({
                message:"anda belum pernah login"
            });
        }

        // cek apakah password yang ada di user itu benar
        const hasil = await compare(password,result.password);
        if(!hasil){
            return res.status.json({message:"username atau password salah"});
        }
    } catch (error) {}
};
