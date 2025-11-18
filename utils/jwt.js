import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

// membuat verifikasi token
export const verifikasiToken = (token) => {
    return new Promise((resolve, reject) => {
        const secret = process.env.SECRET_JWT;
        jwt.verify(token, secret, (err, decode) => {
            if (err) reject(err);
            else resolve(decode);
        });
    });
};

export const signToken = (payload,expire="1h") => {
    const secret = process.env.SECRET_JWT;
    const ttd = jwt.sign(payload, secret,{expiresIn:expire});
    return ttd;
};
