const { createConnection } = require('mysql')

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'recursive_db',
    
})

connection.connect((error) => {
    if (error) {
        console.log(error)
        process.exit(1)
    }
    console.log('DB connected!!')
})

function getAllData() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories', (error, data) => {
            if (error) {
                console.log('Unable to fetch data!!')
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    getAllData,
}