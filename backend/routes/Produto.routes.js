import express from "express";
import { criarProduto, deletarProduto, getProduto, updateProduto } from "../controller/Produto.controller.js";

const router = express.Router()


router.get("/" , getProduto)
router.post("/" , criarProduto)
router.put("/:id", updateProduto)
router.delete("/:id", deletarProduto)

export default router