const { request, response } = require("express")
const { Appointment } = require("../models/appointment.model");
const { Book } = require("../models/book.model");
const { User } = require("../models/user.model")


const appointmentPost = async (req = request, res = response) => {
    const { date } = req.body;
    const appointment = await Appointment.create({ date })

    res.json({ success: true, appointment, message: 'Appointment created successfully' })

}
const appointmentGet = async (req = request, res = response) => {
    const appointment = await Appointment.findAll()
    res.json({ success: true, appointment, message: "All appointments"})

}
const bookPost = async (req = request, res = response) => {
    const { id } = req.params;
    const { user_id } = req.query
    const book_id = await Book.findOne({ where: { appointment_id: id } })
    const user_id_book = await Book.findOne({ where: { user_id: user_id } })
    const userExist = await User.findByPk(user_id)
    if (!userExist) {
        return res.status(400).json({ success: false, message: 'The user does not exist' })
    }
    if (book_id && user_id_book) {
        return res.status(400).json({ success: false, message: 'You have already booked this appointment' })
    }
    const book = await Book.create({ user_id, appointment_id: id })

    res.json({ success: true, book, message: 'Book created successfully' })


}

module.exports = { appointmentPost, appointmentGet, bookPost }

