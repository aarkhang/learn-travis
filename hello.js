var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('Hello Travis!');

}).listen( port );

console.log('Server running on port ' + port);
