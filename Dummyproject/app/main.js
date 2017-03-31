var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
})

app.get('/notSoHelloWorld', function (req, res) {
	res.send('Fine, have it your way.');
})

app.post('/', function (req, res) {
	console.log('Got a POST request');
	res.send("Hello POST");
})

var server = module.exports = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listenening at http://%s:%s", host, port);
})
