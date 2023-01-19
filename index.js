'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err, res)=>{
    if(err){
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('Conexión a la BD establecida...')

    app.listen(config.port, () => {
        console.log(`Api-rest corriendo en http//:localhost:${config.port}`)
    })
    
})


