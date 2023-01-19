'use strict'
const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()
const auth = require('../middlewares/auth')
const UserCtrl = require('../controllers/user')

//Obtiene todos los productos
api.get('/products', ProductCtrl.getProducts)
//Obtiene un producto
api.get('/product/:productId', ProductCtrl.getProduct)
//Envia un producto
api.post('/product', auth, ProductCtrl.saveProduct)
//Actualiza un producto
api.put('/product/:productId', auth, ProductCtrl.updateProduct)
//Elimina un producto
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct)
//Registra un usuario
api.post('/singup/', UserCtrl.singUp)
//Inicia sesión
api.post('/singIn', UserCtrl.singIn)
//Ruta privada
api.get('/private', auth, (req, res) =>{
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api