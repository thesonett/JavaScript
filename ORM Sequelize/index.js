import User from "./models/User.js"
import sequelize from "./config/database.js"


await sequelize.sync({force: true}).then((data) => {
    return User.create({name: 'Joy Saha', email: 'joysaha@gmail.com'})
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})