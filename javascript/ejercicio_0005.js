const listaI = document.querySelectorAll('#numeros li')

const mensaje = `hay ${listaI.length} elementos en la lista ul "numeros"`;
document.getElementById('output').innerHTML = mensaje;

for (let i=0; i < listaI.length; i+=1) {
  listaI.item(i).value = i+1;
}