const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database');

class Appointment extends Model { }
Appointment.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    date: { type: DataTypes.DATE, allowNull: false, unique: true },
    created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
},
    {
        sequelize,
        modelName: 'appointment',
        timestamps: false,

    }
)
module.exports = { Appointment };