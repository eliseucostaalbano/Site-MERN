import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Produto from "./models/Produto.js"

dotenv.config();

const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/produtos" , (req, res) => {
    
})

app.post("/produtos" , async(req, res) => {
    const produto = req.body

    if(!produto.nome || !produto.preço || !produto.imagem){
     return res.status(400).json({sucess:false, message: "Prencha Todos Os Campos"})
    }

    const novoProduto = new Produto(produto)

    try {
        await novoProduto.save()
        res.status(201).json({sucess:true, data: novoProduto})
    } catch (error) {
        console.error("Erro em criar produto", error.message)
        res.status(500).json({sucess:false, message: "Erro no Servidor"})
    }
})


app.listen(2621, () =>{
    connectDB();
    console.log("Servidor iniciado em http://localhost:2621")
})