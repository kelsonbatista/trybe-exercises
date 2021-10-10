
// Item 3
// anterior: fazer um triangulo, com n de base
// agora inverter o lado do triangulo

let n = 5;
let j = 4;
let asterisk = '*'

for (let i = 0; i < n; i += 1) {
  console.log(' '.repeat(j) + asterisk.repeat(n - j));
  j -= 1;
}


// Ref. repetir um caracter por n vezes
// https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
