'use strinct'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: {type: String, select: false},
    singupDate: {type: Date, default: Date.now()},
    lastSingup: Date 
})

//Encripta la contraseña del usuario.
UserSchema.pre('save', function(next) {
    let user = this
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt)=>{
        if(err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash)=>{
            if(err) return next(err)

            user.password = hash
            next()
        })
    })    
})

//Genera un avatar deacuerdo al correo del usuario o uno por defecto si no es un usuario en BD.
UserSchema.methods.gravatar = function(){
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=robohash`

    //Encripta el avatar
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')

    return `https://gravatar.com/avatar/${md5}?s=200&d=robohash`
}

module.exports = mongoose.model('user', UserSchema)