module.exports = {
    port: process.env.PORT || 8080,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'MiClaveToken'
}