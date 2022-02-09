/*

08 - Ordem decrescente

Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.

Exemplo de saída:
-------------
x, y, z ...n.
-------------

*/

function sortDec(){
  // Desenvolva seu código nessa função
  let numbers = '';
  for(let i = 200; i >= 100; i--) {
    numbers += i + ', ';
  }
  let remove = numbers.substr(0,numbers.length-2)  + '.'; 
  return remove;
}
console.log(sortDec());
module.exports = sortDec;
