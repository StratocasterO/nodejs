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
	res.render('escalas');
});

router.get('/escalas1', function(req, res, next) {
	database.query('INSERT INTO escalas(escala) VALUES ("mayor")', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		}    
	});
	res.writeHead(200);
	res.end(); 
});

router.get('/escalas2', function(req, res, next) {
	const escala = req.query.escala; // recoge el valor de la url http://localhost:3000/escalas2?escala=menor

	database.query('INSERT INTO escalas(escala) VALUES ("'+ escala +'")', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		}    
	});
	res.writeHead(200);
	res.end(); 
});

router.get('/escalas3', function(req, res, next) {
	const escala = req.query.escala; // recoge el valor de la url http://localhost:3000/escalas2?escala=menor&grado=3
	const grado = req.query.grado;
	database.query('INSERT INTO escalas(escala,grado) VALUES ("'+ escala +'", "'+ grado +'")', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		}    
	});
	res.writeHead(200);
	res.end(); 
});

router.get('/escalas4', function(req, res, next) {
	const escala = req.query.escala; // recoge el valor de la url http://localhost:3000/escalas2?escala=menor&grado=3
	const grado = req.query.grado;
	database.query('INSERT INTO escalas SET ?, ?',[{escala:escala}, {grado:grado}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		}    
	});
	res.writeHead(200);
	res.end(); 
});

module.exports = router;