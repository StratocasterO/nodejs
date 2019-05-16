var express = require('express');
var router = express.Router();

var database = require('./database_futbol.js');

router.get('/inicio', function(req, res, next) {
	database.query('SELECT * FROM equipo', function(error,filas){
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

router.get('/equipo', function(req, res, next) {
	const codigo = req.query.cod;

	database.query('SELECT * FROM jugador WHERE ?',{equipo_cod:codigo}, function(error,filas1){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};

		filas1 = JSON.stringify(filas1);

		database.query('SELECT * FROM equipo WHERE ?',{equipo_cod:codigo}, function(error,filas2){
			if(error){            
				console.log('Se ha producido un error al leer la base de datos');
				return;
			};

			filas2 = JSON.stringify(filas2);
			data = {"jugadores": filas1, "equipo": filas2};
			data = JSON.stringify(data);
			res.writeHead(200);
			res.write(data);
			res.end(); 
		});
	});
	console.log("Se ha consultado una entrada de la base de datos");
});

module.exports = router; 