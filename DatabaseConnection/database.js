// database.js
const { createConnection } = require('mysql');
require('dotenv').config()

const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to DB');
});

function getUsers() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
}

module.exports = {
    connection,
    getUsers,
};
