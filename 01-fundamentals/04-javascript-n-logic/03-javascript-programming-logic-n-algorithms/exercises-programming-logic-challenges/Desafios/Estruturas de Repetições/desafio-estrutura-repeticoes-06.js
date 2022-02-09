/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers(){
  // Desenvolva seu código nessa função
  let odd = '';

  for(let i = 1; i <= 50; i++) {
    if((i-1)%2 === 0) odd += i + ', ';
  }
  remove = odd.substr(0,odd.length-2);
  remove += '.';
  return remove;
}

console.log(oddNumbers());
module.exports = oddNumbers;
