let PI=3.14;
function dividir(x1,x2){
    if (x2==0){
        mostrarErrorDivision();
    }else{
        return x1/x2;
    }
}

function mostrarErrorDivision() {
    console.log('No se puede dividir por cero');
}
exports.dividir=dividir;
exports.PI=PI;