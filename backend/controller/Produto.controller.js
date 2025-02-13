import mongoose from "mongoose";
import Produto from "../models/Produto.js"

export const getProduto = async(req, res) => {
    try {
        const produtos = await Produto.find({})
        res.status(200).json({sucess:true, data: produtos})
    } catch (error) {
        res.status(500).json({sucess:false, message: "Erro no Servidor"})
    }
}

export const criarProduto = async(req, res) => {
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
}

export const updateProduto = async(req,res) => {
    const { id } = req.params

    const produtos = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Id Invalido"});
	}

   try {
    const updateProduto = await Produto.findByIdAndUpdate(id, produtos, {new:true})
    res.status(200).json({sucess:true, data: updateProduto})
   } catch (error) {
    res.status(500).json({sucess:false, message: "Erro no Servidor"})
   }
}

export const deletarProduto = async(req, res) => {

    const { id } = req.params

  try {
    await Produto.findByIdAndDelete(id)
    res.status(201).json({sucess:true, message: "Produto Deletado"})
  } catch (error) {
    res.status(404).json({sucess:false, message: "Produto Não Encontrado"})
  }

}