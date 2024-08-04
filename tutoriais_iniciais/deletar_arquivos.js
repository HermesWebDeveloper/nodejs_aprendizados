var fs = require('fs');

fs.unlink('me_deleta.txt', function(err) {
    if (err) throw err;
    console.log('Deletado!');
});