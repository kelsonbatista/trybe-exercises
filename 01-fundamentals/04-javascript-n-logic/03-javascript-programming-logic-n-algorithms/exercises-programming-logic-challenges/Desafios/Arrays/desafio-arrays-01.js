/*

01 - Encontre o maior número de uma array

Escreva um algoritmo que recebe uma array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função

  let maior = 0;

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maior) {
      maior = numbers[i]; 
    }
  }

  return maior;
}
console.log(getMaxNumber([4, 19, 17, 20, 7, 45, 3, 8 ]))
module.exports = getMaxNumber;
