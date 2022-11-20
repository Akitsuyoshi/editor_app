const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/echo_user_input', (req, res) => {
    res.send(req.body.user_input)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use((req, res, _) => {
    res.status(404).send("Sorry can't find the page: " + req.originalUrl)
})