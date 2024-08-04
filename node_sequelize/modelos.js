const { Sequelize, DataTypes } = require('sequelize');

// Instanciando o Sequelize (Conectando com o banco)
const banco = new Sequelize('sys', 'root', '1234', {
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

// Adicionando usuários em uma lista


//Síncronizando todos os modelos criados com o banco de dados real
(async () => {
    try {
        await User.sync({ force: true });
        console.log('Modelos síncronizados com o banco de dados!');

        // Criando usuários
        User.create({firstname: 'Hermes', lastname: 'Barbosa'});
        User.create({firstname: 'Geordes', lastname: 'Barbosa'});

        console.log('Usuários adicionados ao banco de dados com sucesso!')
    } catch(error) {
        console.log('ERRO')
    }
    
})();