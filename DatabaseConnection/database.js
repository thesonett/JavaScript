// database.js
const { createConnection } = require('mysql');

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sahajoy@9073525312',
    database: 'user_management',
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
