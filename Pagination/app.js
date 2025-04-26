// server.js
const { getPaginatedData } = require("./database");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/users', async (req, res) => {
    const pageNo = parseInt(req.query.pageNo) || 1;
    const dataLimit = parseInt(req.query.dataLimit) || 5;

    try {
        const data = await getPaginatedData({ pageNo, dataLimit });
        res.status(200).json(data);
    } catch(error) {
        res.status(500).send(error);
        console.error(error);
    }
});

app.listen(3000, () => {
    console.log('Listening at port number: 3000');
});