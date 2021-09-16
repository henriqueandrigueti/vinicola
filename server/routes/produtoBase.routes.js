import express from 'express'
import produtoBaseController from '../controllers/produtoBase.controller'
import authController from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/produtosBase')
    .get(authController.requireSignin, produtoBaseController.list)
    .post(authController.requireSignin, produtoBaseController.create)

router.route('/api/produtosBase/:produtoBaseId')
    .get(authController.requireSignin, produtoBaseController.read)
    .put(authController.requireSignin, produtoBaseController.update)
    .delete(authController.requireSignin, produtoBaseController.remove)

router.param('produtoBaseId', produtoBaseController.produtoBaseById)

export default router