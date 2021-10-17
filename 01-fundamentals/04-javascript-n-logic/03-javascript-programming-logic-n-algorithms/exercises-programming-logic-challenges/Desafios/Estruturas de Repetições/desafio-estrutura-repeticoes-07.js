/*

07 - Onde está o elemento?

Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.

Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------

*/

function findIndexOf(array, element){
  // Desenvolva seu código nessa função
let position = '';
  for(let i = 0; i < array.length; i++) {
    if (element === array[i]) { 
      position = i; 
      break;
    } else { 
      position = 'Elemento Não encontrado no array.'; 
    }
  }
  return position;
}

console.log(findIndexOf([10,11,12,13,14,15], 14))
module.exports = findIndexOf;

