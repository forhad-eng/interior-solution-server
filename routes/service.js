const express = require('express')
const router = express.Router()
const ServiceModel = require('../models/Service')

router.get('/', async (req, res) => {
    const services = await ServiceModel.find()
    res.send(services)
})

module.exports = router