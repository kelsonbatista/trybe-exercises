
// Item 1
// dado um n (>1) imprimir um quadrado de asteriscos de lado tamanho n

// let n = 5;
// let asterisk = '*'

// for (let i = 0; i < n; i += 1) {
//   console.log(asterisk.repeat(n));
// }


// Ref. repetir um caracter por n vezes
// https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times

let n = 5;
let lineStars = '';

for (let i = 0; i < n; i++) {
  lineStars += '*';
}

for (let i = 0; i < n; i++) {
  console.log(lineStars);
}