const { connection, getUsers } = require('./database');
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/users', async (req, res)=> {
    try {
        const users = await getUsers();
        res.status(201).json(users)
    } catch (err) {
        res.status(401).send(err)
    }
})

app.listen(3000, () => {
    console.log('server started!!')
})