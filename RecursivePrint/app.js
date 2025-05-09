const { getAllData } = require('./database')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/categories', async (req, res) => {
    try {
        const data = await getAllData()
        res.status(200).json(data)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})


app.listen(3000, () => {
    console.log('Server started!!')
})
