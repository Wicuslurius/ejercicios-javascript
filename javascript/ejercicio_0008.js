function cuantosDias(anio, mes, dia, nombreEvento){
  const hoy = new Date();
  const milsegEnUnDia = 1000 * 60 * 60 * 24; // milisegundos de un dia
  hoy.setHours(0,0,0,0);
  const fechaEvento = new Date(anio, mes - 1 , dia);
  const diferenciaHoras = Math.abs(fechaEvento.getTimezoneOffset() / 60) - Math.abs(hoy.getTimezoneOffset() / 60);
  hoy.setHours(hoy.getHours() - diferenciaHoras);

  if (fechaEvento > hoy) {
    return `Faltan ${(fechaEvento.getTime() - hoy.getTime()) / milsegEnUnDia} dias para ${nombreEvento}`;
  } else {
    return 'la fecha ya paso';
  }
}

document.getElementById('output').innerHTML = cuantosDias(2026, 12, 25, 'Navidad');