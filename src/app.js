const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/health', (req, res) => {
    res.status(200).send()
})

app.get('/metrics', (req, res) => {
    res.status(200).send()
})

app.post('/echo_user_input', (req, res) => {
    res.send(req.body.user_input)
})

module.exports = app