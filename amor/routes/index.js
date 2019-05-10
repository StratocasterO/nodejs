var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/prueba', function(req, res, next) {
	const obj = {
		usuario: "Omar",
		edad: "28",
		trabajo: "Profesor"
	};
	res.render('prueba', obj);
});

// añade ítems a la base de datos:
var database=require('./database.js');

router.get('/escalas', function(req, res, next) {
    database.query('INSERT INTO escalas(escala) VALUES ("mayor")');
    res.writeHead(200);
    res.end(); 
});

module.exports = router;