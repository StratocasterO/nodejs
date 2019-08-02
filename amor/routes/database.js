var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'eu-cdbr-west-02.cleardb.net',
    user:'b7113323d68164',
    password:'29fbc5df',
    database:'heroku_533b07f30470a41'
});

conexion.connect(function (error){
    if (error)
        console.log('Error de conexión con la base de datos');
    else
        console.log('Conexión con la base de datos 1 establecida');
});

module.exports=conexion; 