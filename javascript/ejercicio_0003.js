const hora = "hola";
console.log(hora);
let mensaje;
let nombreEstilo;

if (hora < 12) {
  mensaje = 'buenos dias';
  nombreEstilo = 'maniana';
}else if (hora < 18){
  mensaje = 'buenas tardes';
  nombreEstilo = 'tarde';
}else if (hora < 23){
  mensaje = 'buenas noches';
  nombreEstilo = 'noche';
}else{
  mensaje = 'hola';
  nombreEstilo = 'madrugada'
}

document.getElementById('output').innerHTML = mensaje;
document.body.className = nombreEstilo;