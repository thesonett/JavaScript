import sequelize from "../config/database.js";
import { DataTypes } from 'sequelize'

const User = sequelize.define('user-model', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false // Don't add createdAt/updatedAt fields
})

export default User;