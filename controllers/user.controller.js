const { request, response } = require("express")

const { User } = require("../models/user.model")
const { Appointment } = require("../models/appointment.model")
const { Book } = require("../models/book.model")
const bcrypt = require("bcryptjs")


const usersPost = async (req = request, res = response) => {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)
    await user.save();
    res.json({ success: true, id: user.id, message: "User created" })
}
const usersGet = async (req = request, res = response) => {
    const { id } = req.params
    const users = await User.findByPk(id)
    res.json({ success: true, users })

}



module.exports = {
    usersPost,
    usersGet
}
