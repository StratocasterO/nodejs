var express = require('express');
var router = express.Router();
var multer = require('multer');

var database = require('./database.js');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // carpeta de destino del servidor
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        // el nombre es la fecha (milisegundos desde 1970) + el nombre original del archivo
        filename = Date.now() + file.originalname
        callback(null, filename);
    }
});

var upload = multer({storage:storage}).single('userPhoto');

router.post('/', function(req, res, next) {
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.end("Error uploading file");
        }
        console.log("File uploaded");
        res.end("File uploaded");

        database.query('INSERT INTO archivos SET ?',{nombre:filename}, function(error,filas){
            if(error){            
                console.log('Se ha producido un error al escribir en la base de datos');
                return;
            };    
        });
    });
});

router.get('/fotos', function(req, res, next) {
    database.query('SELECT * FROM archivos', function(error,filas){
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