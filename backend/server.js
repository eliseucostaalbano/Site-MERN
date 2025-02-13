import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import produtoRoute from './routes/Produto.routes.js'

dotenv.config();

const app  = express()

app.use(express.json())

app.use("/produtos", produtoRoute)

app.listen(2621, () =>{
    connectDB();
    console.log("Servidor iniciado em http://localhost:2621")
})