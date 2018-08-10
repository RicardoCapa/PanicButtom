var exp = require('express');
var app=exp();
var path = require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
condole.log("Conexion establecida")