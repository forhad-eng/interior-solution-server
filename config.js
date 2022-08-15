const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.32h2nvu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, () => {
        console.log('MongoDB Connected')
    })
}

module.exports = connect