import {sign, verify} from "jsonwebtoken";
import {config} from "dotenv";
config();

// membuat verifikasi token
export const verifikasiToken = (token) => {
    return new Promise((resolve, reject) => {
        const secret = process.env.SECRET_JWT;
        verify(token, secret, (err, decode) => {
            if (err) reject(err);
            else resolve(decode);
        });
    });
};

