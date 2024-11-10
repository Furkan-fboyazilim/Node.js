const express = require('express')
const app = express()
const user = express.Router()

user.get('/', (req, res) => {
    res.send("user default")
})

user.get('/1', (req, res) => {
    res.send("user 111 default")
})

module.exports = user