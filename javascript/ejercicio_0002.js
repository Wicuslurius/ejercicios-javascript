const hora = new Date().getHours();
let mensaje;

if(hora < 12) mensaje = "hola buenos dias";
else if (hora < 21) mensaje = "Buenas tardes";
else if (hora < 24) mensaje = "buenas noches";
document.getElementById("output").innerHTML = mensaje;