// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
const intentos = 6;
let intentosRestantes = intentos;
let act = "perro";
let siguienteLetra = 0;
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes',
  'manta',
  'menta'
];

function button(e) {
  let f = Math.trunc(Math.random() * 23);
  let correcto = 'perro';
  let inp = document.getElementById('inp').value;
  console.log(inp);
  for (var i = 0; i < 1; i++) {
    let row = document.createElement('div');
    row.className = "tabla";
    for (var j = 0; j < 5; j++) {
      let box = document.createElement('div');
      box.textContent = inp[j];
     if (correcto.includes(act[j])) {
       box.style.backgroundColor = 'yellow';
     } else {
       box.style.backgroundColor = 'grey';
     }
     if (correcto[j] == inp[j]) {
       box.style.backgroundColor = 'green';
     }
     box.className = 'box';
     row.appendChild(box);
   }
   // inp.appendChild(row);
   // if (correcto == inp) {
   //   document.getElementById('win').style.display
   }
  }
