const { Sequelize, DataTypes } = require('sequelize');

// Instanciando o Sequelize (Conectando com o banco)
const banco = new Sequelize('dc', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo
const User = banco.define(
    'User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
        }
    }
);

module.exports = User;