
// Item 2
// anterior: dado um n (>1) imprimir um quadrado de asteriscos de lado tamanho n
// mesmo que anteior, mas fazer um triangulo, com n de base

let n = 5;
let j = 4;
let asterisk = '*'

for (let i = 0; i < n; i += 1) {
  console.log(asterisk.repeat(n - j));
  j -= 1;
}


// Ref. repetir um caracter por n vezes
// https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
