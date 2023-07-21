const { User } = require('../../models/user.model')


const existEmail = async (email = '') => {

    const isEmail = await User.findOne({ where: { email } })
    if (isEmail) throw new Error(`The email: ${email} already exists`)
}
const existUser = async (id = '') => {

    const isUser = await User.findByPk(id)
    if (!isUser) throw new Error(`The user: ${id} does not exist`)
}

module.exports = { existEmail, existUser }