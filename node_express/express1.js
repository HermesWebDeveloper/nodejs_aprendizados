const express = require('express')
const mysql = require('mysql2')
const PORT = 3000;

var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dc'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados.");
});

app.get('/', (req, res) => {
    res.send("Olá, Mundo!");
});

app.listen(PORT, () => {
    console.log('Server rodando na porta: ' + PORT)
})