require('dotenv').config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('prueba_tecnica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})
const dbConnection = async () => {
    try {
        await sequelize.sync()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

module.exports = { sequelize, dbConnection }