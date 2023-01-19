'use strinct'

const User = require('../models/user')
const service = require('../services/service')

//Se registra un usuario
function singUp (req, res){

    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.save((err) => {
        if(err) res.status(500).send({mensagge: `Error al registrar el usuario. ${err}`})

        return res.status(200).send({token: service.createToken(user)})
    })

}

//Inicio se sesión
function singIn (req, res){
    User.find({email: req.body.email}, (err, user))
    
    if (err) {
        return res.status(500).send({mensagge: err})        
    }

    if (!user) {
        return res.status(404).send({mensagge: 'No existe el usuario'})
    }

    req.user = user
    res.status(200).send({
        mensagge: 'Login exitoso',
        token: service.createToken(user)
    })
}

module.exports = {
    singUp,
    singIn    
}