var express = require('express');
var router = express.Router();

// añade ítems a la base de datos:
var database=require('./database.js');

router.get('/enviar', function(req, res, next) {
	const escala = req.query.escala;
	const grado = req.query.grado;
	const modo = req.query.modo;
	const acorde = req.query.acorde;

	database.query('INSERT INTO escalas SET ?,?,?,?',[{escala:escala},{grado:grado},{modo:modo},{acorde:acorde}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end(); 
});

router.get('/borrar', function(req, res, next) {
	const id = req.query.id;

	database.query('DELETE FROM escalas WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha borrado una entrada de la base de datos");
	res.writeHead(200);
	res.end(); 
});

router.get('/modificar', function(req, res, next) {
	const id = req.query.id;
	const escala = req.query.escala;
	const grado = req.query.grado;
	const modo = req.query.modo;
	const acorde = req.query.acorde;

	database.query('UPDATE escalas SET ?,?,?,? WHERE ?',[{escala:escala},{grado:grado},{modo:modo},{acorde:acorde},{id:id}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha modificado una entrada de la base de datos");
	res.writeHead(200);
	res.end(); 
});

router.get('/consultar', function(req, res, next) {
	database.query('SELECT * FROM escalas', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    

		filas = JSON.stringify(filas);
		res.writeHead(200);
		res.write(filas);
		res.end(); 
	});
	console.log("Se ha consultado una entrada de la base de datos");
});

module.exports = router;