//funcion anonima
const suma = function(x, y){
    return x + y;
}

alert(suma(2, 4));
document.getElementById("output").innerHTML = suma(2, 8);

//-------------------------------------------------------
//funcion declarada
function resta(a , b){
    return a - b;
};

document.getElementById("output2").innerHTML = resta(4, 1);

//---------------------------------------------------
//funcion flecha

const multiplicar = (c, d) => c * d;

document.getElementById("output3").innerHTML = multiplicar(4, 5);