let mat=require('./aritmetica');

console.log('La división de 8 entre 4 es '+mat.dividir(8,4));
console.log('El valor de PI es '+mat.PI);

//=============================================================================

let fs=require('fs');
//writeFile(donde_vamos_a_escribir, que_vamos_a_escribir, que_vamos_a_ejecutar_despues_de_escribir)
fs.writeFile('./archivo.txt','Hola\nOmar',function(error){
if (error)
    console.log(error);
else
    console.log('El archivo fue creado');
});
console.log('Última línea del programa'); // se muestra antes del anterior porque node.js es asíncrono