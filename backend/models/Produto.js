import mongoose from "mongoose";

const produtoSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    preço: {
        type: Number,
        require: true,
    },
    imagem: {
        type: String,
        require: true,
    },
},
    {
      timestamp:true
    })

const Produto = mongoose.model('Produto',  produtoSchema)

export default Produto