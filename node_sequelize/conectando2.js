const { Sequelize } = require('sequelize');

var banco = new Sequelize('sys', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

(
    async () => {
        try {
            await banco.authenticate();
            console.log('Conexão estabelecida com sucesso!!');
        } catch (error) {
            console.log('Erro de conexão!!', error)
        }
    }
)();