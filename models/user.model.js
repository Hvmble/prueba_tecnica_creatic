const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')


class User extends Model { }

User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: DataTypes.STRING,
        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'user',
        timestamps: false,
    }
)

module.exports = { User }
