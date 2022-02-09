/*

02 - Encontre o menor número de uma array

Escreva um algoritmo que recebe uma array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  let menor = numbers[0];

  for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] < menor) {
      menor = numbers[i]; 
    }
  }

  return menor;
}
console.log(getMinNumber([4, 19, 17, 2, 7, 45, 3, 8 ]))
module.exports = getMinNumber;
