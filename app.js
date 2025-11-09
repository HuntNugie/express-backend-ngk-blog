import express from "express";
import cors from "cors";
import indexRoute from "./routes/indexRoute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
config();

const app = express();

// setup cors
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// untuk routing endpoint api
app.use("/api",indexRoute);

// untuk server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`berjalan di http://localhost:${process.env.SERVER_PORT}`);
});