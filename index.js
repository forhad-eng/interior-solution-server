const express = require('express')
const cors = require('cors')
const port = 5000 || process.env.PORT
const app = express()
require('dotenv').config()
require('./config')()

app.use(express.json())
app.use(cors())

//services routes
app.use('/services', require('./routes/service'))

app.listen(port, () => {
    console.log('Listening to port', port)
})