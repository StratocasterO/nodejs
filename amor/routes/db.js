var express = require('express');
var router = express.Router();

var database = require('./database.js');

// ESCALAS MUSICALES ===============================================================================================================
// añade ítems a la base de datos:
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

// elimina ítems de la base de datos:
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

// modifica ítems de la base de datos:
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

// consulta la base de datos:
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

// BASE DE DATOS ASISTENTES ==============================================================================================================
// alta:
router.get('/alta', function(req, res, next) {
	const nombre = req.query.data;

	database.query('INSERT INTO asistentes SET ?',{nombre:nombre}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end(); 
});

// baja:
router.get('/baja', function(req, res, next) {
	const nombre = req.query.data;

	database.query('DELETE FROM asistentes WHERE ?',{nombre:nombre}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end(); 
});

// consulta:
router.get('/consulta', function(req, res, next) {
	database.query('SELECT * FROM asistentes', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
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