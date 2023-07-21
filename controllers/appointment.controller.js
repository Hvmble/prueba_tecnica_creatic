const { request, response } = require("express")
const { Appointment } = require("../models/appointment.model");
const { Book } = require("../models/book.model");
const { User } = require("../models/user.model")


const appointmentPost = async (req = request, res = response) => {
    const { date } = req.body;
    const appointment = await Appointment.create({ date })

    res.json({ success: true, appointment, message: 'Appointment created successfully' })

}


module.exports = { appointmentPost, appointmentGet, bookPost }

