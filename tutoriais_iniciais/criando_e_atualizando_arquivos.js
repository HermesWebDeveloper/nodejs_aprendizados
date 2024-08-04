var fs = require('fs');

fs.writeFile('file1.txt', 'Olá, Mundo!', function(err) {
    if (err) throw err;
    console.log("Arquivo salvo!!");
    fs.readFile('file1.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});