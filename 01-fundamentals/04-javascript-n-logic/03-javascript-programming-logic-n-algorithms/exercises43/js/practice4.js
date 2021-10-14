
// Item 4
// anterior: fazer uma piramide, com n de base (central)


// for (let i = 0; i < n; i += 1) {
  // console.log('*'.repeat(n));
// }

// for (let i = 1; i <= n; i += 1) {
  // for (let j = n; j > 0; j -= 1) {
    // console.log(' '.repeat(n-i) + '*'.repeat(n-j));
    // j -= 1;
  // }
// }

let n = 5;
let j = 4;

for (let i = 0; i < n; i += 1) {
  // for (let j = n; j > 0; j -= 1) {
    console.log(' '.repeat(n-i) + '*'.repeat(n-j) + '*'.repeat(i));
    j -= 1; 
  // }
}



// Ref. repetir um caracter por n vezes
// https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
// 
// Ref. Como fazer a piramide
// https://cursos.alura.com.br/forum/topico-piramide-de-asteriscos-55972
//
// Ref. Apoio
// https://wagnergaspar.com/como-imprimir-um-triangulo-de-asteriscos-com-espacos-a-esquerda/