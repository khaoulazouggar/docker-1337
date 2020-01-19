var http = require("http");

http.createServer( function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>lsoulima</h1>\n<p>1337</p>');
}).listen(80);

console.log('Server running at http://127.0.0.1');
