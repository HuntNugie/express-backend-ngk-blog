import {verifikasiToken} from "../utils/jwt.js";
export const auth = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({message: "token tidak ada", status: false});
        }

        const verif = await verifikasiToken(token);
        req.auth = verif;
        next();
    } catch (error) {
        return res.status(401).json({message: "token expired", status: false});
    }
};
