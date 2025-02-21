import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path"
import produtoRoute from './routes/Produto.routes.js'

dotenv.config();
const __dirname = path.resolve();
const app  = express()
const port = process.env.PORT

app.use(express.json())

app.use("/produtos", produtoRoute)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(2621, () =>{
    connectDB();
    console.log("Servidor iniciado em http://localhost:" + port)
})