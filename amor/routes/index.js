var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prueba', function(req, res, next) {
	const obj = {
		usuario: "Omar",
		edad: "28",
		trabajo: "Profesor"
	};
	res.render('prueba', obj);
});

module.exports = router;
