var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ejemplos');
});

/*Cargar vista index.hbs pasandole un parámetro*/
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

module.exports = router;