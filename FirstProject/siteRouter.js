const express = require('express')
const site = express.Router()


site.get('/', (req, res) => {
    res.send('ters')
})
site.get('/1', (req, res) => {
    res.send('ters1111')
})

module.exports = site