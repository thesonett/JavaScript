import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'orm',
    dialect: 'mysql',
    host: 'localhost',
})

await sequelize.authenticate().then(() => {
    console.log('DB Connected!!')
}).catch((error) => {
    console.log(error)
    console.log('Unable to connect DB!!')
})

export default sequelize;