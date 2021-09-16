import mongoose from 'mongoose'

const produtoBaseSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: "Nome do produto base é obrigatório."
    }
})

export default mongoose.model('ProdutoBase', produtoBaseSchema)

