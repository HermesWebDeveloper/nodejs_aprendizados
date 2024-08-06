const express = require('express');
const PORT = 3000;
const { Sequelize, DataTypes } = require('sequelize');

var app = express();

app.get('/', (req, res) => {
    res.send("Bem vindo a nossa Homepage!");
});

app.listen(PORT, () => {
    console.log("Conectado na porta: " + PORT);
});

const sequelize = new Sequelize('banco_chuchuzinho_hermes', 'banco_chuchuzinho_hermes_user', 'jabwi67t0tG1fdkIuRCtehVwktF6knOy', {
    host: 'dpg-cqp1g1ggph6c73ff32g0-a.oregon-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    }
});

// Testando a conexão com o banco de dados
async function testConnection () {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso!');
    } catch (error) {
        console.error('Conexão com ERROR: ', error);
    };
};

testConnection();