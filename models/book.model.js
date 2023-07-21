const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database');
const { User } = require('./user.model');
const { Appointment } = require('./appointment.model');

class Book extends Model { }
Book.init({

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: User.id } },
    appointment_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Appointment, key: Appointment.id } },


},
    {
        sequelize,
        modelName: 'book',
        timestamps: false,
    })


Book.belongsTo(User, { as: 'user', foreignKey: 'user_id' })
User.hasOne(Book, { as: 'book', foreignKey: 'user_id' })

Book.belongsTo(Appointment, { as: 'appointment', foreignKey: 'appointment_id' })
Appointment.hasOne(Book, { as: 'book', foreignKey: 'appointment_id' })


module.exports = { Book }