var express = require('express');
var path = require('path')
var server = express();

server.get('/', function(req, res){ 
		res.send('hello world');
		//res.sendFile(path.join(__dirname + '/public/index.html'));	
});

server.get('/messages/:message', function(req,res){
	res.send('tu mensaje es: ' + req.params.message);
});

server.listen(3000);