var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'amor_database'
});

conexion.connect(function (error){
    if (error)
        console.log('Error de conexión con la base de datos');
    else
        console.log('Conexión con la base de datos 1 establecida');
});

module.exports=conexion; 