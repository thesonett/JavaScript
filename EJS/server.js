const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const port = 3000

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), {page: 'home'}, {}, (error, str) => {
        res.send(str)
    })
})

app.get('/about', (req, res) => {
    ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), {page: 'about'}, {}, (error, str) => {
        res.send(str)
    })
})

app.listen(port, () => {
    console.log(`Server started at port number: ${port}`)
})