import express from "express";
import cors from "cors";
import indexRoute from "./routes/indexRoute.js";
import { config } from "dotenv";

config();

const app = express();

// setup cors
app.use(cors({
    origin:"https://localhost:5173",
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded());

// untuk routing
app.use("/",indexRoute);

// untuk server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`berjalan di http://localhost:${process.env.SERVER_PORT}`);
});