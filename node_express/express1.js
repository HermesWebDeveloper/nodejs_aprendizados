const express = require('express')
const mysql = require('mysql2')

var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dc'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/v1/user/:id', (req, res) => {

    var id = req.params.id; 

    // CONSULTA NO BANCO DE DADOS
    con.query("SELECT * FROM dc.users WHERE id=" + id, function(err, result, fields) {
        if (err) throw err;
        res.send({
            result
        });
    });
});

app.listen(3000)