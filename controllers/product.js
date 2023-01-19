'use strict'
const Product = require('../models/product')

function getProduct(req, res){

    let productID = req.params.productId

    Product.findById(productID, (err, product) => {
        console.log(productID)
        if(err) return res.status(500).send({mensagge: `Error al realizar la petición ${err}`})
        if(!product) return res.status(404).send({mensagge: `El producto no existe`})

        res.status(200).send({product})
    })

}

function getProducts(req, res){
    Product.find({}, (err, products) => {
        if(err) return res.status(500).send({mensagge: `Error al realizar la petición ${err}`})
        if(!products) return res.status(404).send({mensagge: `No existen productos`})

        res.status(200).send({products})
    })     
}

function saveProduct(req, res){
   console.log('POST/product')
   console.log(req.body)

   let product = new Product()

   product.name = req.body.name_
   product.picture = req.body.picture_
   product.price = req.body.price_
   product.category = req.body.category_
   product.description = req.body.description_

   product.save((err, productStore) => {
       if(err) res.status(500).send({mensagge: `Error al guardar producto. ${err}`})

       res.status(200).send({product: productStore})
   })
}

function updateProduct(req, res){
    let productID = req.params.productId
    let update = req.body
    console.log(productID)
    console.log(update)
    Product.findByIdAndUpdate(productID, update, (err, productUdate) =>{
        if(err) return res.status(500).send({mensagge: `Eror al actualizar el producto: ${err}`})

        res.status(200).send({product: productUdate})
    })        
}

function deleteProduct(req, res){
    let productID = req.params.productId
    
    Product.findById(productID, (err, product) =>{
        if(err) return res.status(500).send({mensagge: `Eror al borrar el producto: ${err}`})
        if(!product) return res.status(404).send({mensagge: `El producto no existe`})

        product.remove(err => {
            if(err) return res.status(500).send({mensagge: `Eror al borrar el producto: ${err}`}) 
            res.status(200).send({mensagge: `El producto se a eliminado`})   
        })
    })    
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct, 
    deleteProduct       
}