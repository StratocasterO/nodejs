var os=require('os');
console.log('Sistema operativo:'+os.platform());
console.log('Versión del sistema operativo:'+os.release());
console.log('Memoria total:'+os.totalmem()/1e9+' GB');
console.log('Memoria libre:'+os.freemem()/1e9+' GB');

// diferentes módulos que están instalados por defecto