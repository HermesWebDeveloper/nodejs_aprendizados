var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
    fs.readFile('../demo1.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': "text/html"});
            return res.end("404 not found");
        };
        res.writeHead(200, {'Content-Type': "text/html"})
        res.write(data);
        return res.end();
    });
}).listen(8080)