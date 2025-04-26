const { createConnection } = require('mysql')

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_management'
})

connection.connect((error) => {
    if(error) {
        console.error('Connection falied! ::: ', error)
        process.exit(1)
    }

    console.log('DB connected!!')
})

function getAllData() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM user'

        connection.query(query, (error, data)=> {
            if(error) {
                console.error('Not able to fetch data ::: ')
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

function getPaginatedData({pageNo, dataLimit}) {
    return new Promise((resolve, reject) => {
        const offset = Math.ceil((pageNo - 1) * dataLimit);
        const query = `SELECT * FROM user LIMIT ${dataLimit} OFFSET ${offset}`

        connection.query(query, (error, data)=> {
            if(error) {
                console.error('Not able to fetch data ::: ')
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    getAllData,
    getPaginatedData,
}