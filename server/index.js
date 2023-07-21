const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.path = {
            users: '/users',
            appointment: '/appointments',
        }

        //* Database conection
        this.connectDB()

        //* Middleware
        this.middlewares()

        //* Routes
        this.routes()
    }
    async connectDB() {
        await dbConnection()
    }
    middlewares() {
        //! CORS
        this.app.use(cors())

        //* Body Parser
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.path.users, require('../routes/users.routes'))
        this.app.use(this.path.appointment, require('../routes/appointment.routes'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server