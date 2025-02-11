import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app  = express()

app.get("/produtos" , (req, res)=>{
    
})

app.listen(2621, () =>{
    connectDB();
    console.log("Servidor iniciado em http://localhost:2621")
})