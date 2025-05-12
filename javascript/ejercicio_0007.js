function queDia(nombre){
  const dia = new Date().getDay();
  const nombreDia =  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  return `hola ${nombre} Feliz ${nombreDia[dia]}`;
}

document.getElementById('output').innerHTML = queDia('Ana');