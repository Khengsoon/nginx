var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello World..');
	
}).listen(80)

console.log('Server Listening on port 8080..');
