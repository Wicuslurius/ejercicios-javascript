const dia = 0;
let mensaje;
if (dia === 0 || dia === 6)mensaje = "Buen fin de semana";
else mensaje = `Faltan ${6 - dia} dias para el fin de semana`;
const valorSrc = `./../images/Carita${dia}.png`;
document.getElementById("carita").src = valorSrc;
document.getElementById("output").innerHTML = mensaje