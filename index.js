var http = require('http');
var url = require('url')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " string " + q.month;
    res.end(txt);
}).listen(8080)