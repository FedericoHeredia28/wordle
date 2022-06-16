// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
const intentos = 6;
let intentosRestantes = intentos;
let intentoActual = "perro";
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

let r = Math.random() * 21;
r = Math.trunc(r);
let correcto = dict[r]
if (correcto == intentoActual) alert("se");
let i = 0;
for (let i = 0; i < 6; i++) {
  let div = document.createElement('div');
  div.textContent = i;
  for (let c == of intentoActual) {
    if (c == intentoActual) {
      div.classList.add('a');
    }
  }
  document.body.append(div);
}
