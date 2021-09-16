import ProdutoBase from "../models/produtoBase.model"
import extend from "lodash/extend"
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res) => {
    const produtoBase = new ProdutoBase(req.body)
    try {
        await produtoBase.save()
        return res.status(200).json({
            message: "Produto base criado com sucesso."
        })
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const produtoBaseById = async (req, res, next, id) => {
    try {
        let produtoBase = await ProdutoBase.findById(id)
        if (!produtoBase)
            return res.status(400).json({
                error: "Produto base não encontrado."
            })
        req.produtoBase = produtoBase
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Não foi possível recuperar o produto base."
        })
    }
}

const read = (req, res) => {
    return res.json(req.produtoBase)
}

const list = async (req, res) => {
    try {
        let produtosBase = await ProdutoBase.find()
        res.json(produtosBase)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const update = async (req, res) => {
    try {
        let produtoBase = req.produtoBase
        produtoBase = extend(produtoBase, req.body)
        await produtoBase.save()
        res.json(produtoBase)
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

const remove = async (req, res) => {
    try {
        let produtoBase = req.produtoBase
        let deletedProdutoBase = await produtoBase.remove()
        res.json(deletedProdutoBase)
    } catch (err) {
        error: errorHandler.getErrorMessage(err)
    }
}

export default {
    create,
    produtoBaseById,
    read,
    list,
    update,
    remove
}