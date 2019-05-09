var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  	res.render('ejemplos');
});

// carga la vista index.hbs pasándole un parámetro
router.get('/amor', function(req, res, next) {
 	 res.render('index', { title: 'Amor' });
});

router.get('/omar', function(req, res, next) {
 	 res.send('<h1>Omar Olmedo Ferrer</h1>');
});

router.get('/libros', function(req, res, next) {
const biblioteca = [
	{
		"titulo": "La Aventura",
		"autor": "Paco"
	},
	{
		"titulo":"Las Cosas",
		"autor": "Pepe"
	}
];
 	 res.send(biblioteca);
});

// cargo un .json externo con require para usarlo como datos en el render
const planetas = require("./planetas.json");
router.get('/planetas', function(req, res, next) {
  	res.render('planetas', {planetas, titulo: "Planetas del universo Star Wars"});
});

// devuelve directamente el .json para que se pueda acceder a los datos
router.get('/planetas_json', function(req, res, next) {
	// permite el acceso a los datos
  	res.setHeader('Access-Control-Allow-Origin', '*'); 
  	res.send(planetas);
});

module.exports = router;