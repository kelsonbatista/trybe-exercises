/*

09 - Incluído nos arrays

Escreva um algoritmo que irá receber dois array a e b, retorne um novo array com os elementos que se repetem em a e b, se não houver elemento repetidos, retorne um array vazio.

Por exemplo:
--------------------------------------------------------------------------------
Entradas:
a = [1, 2, 3 ], b = [4, 2, 4 ]

Saída:
[2]
--------------------------------------------------------------------------------

Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 for's.

*/

function includesArrays(a, b){
  // Desenvolva seu código nessa função

  let count = [];

  for(let i of a) {
    for(let j of b) {
      if(i === j) count.push(i);
    }
  }
  return count;
}

console.log(includesArrays([1, 2, 4, 5, 6], [3, 9, 8, 5, 0, 2]));
module.exports = includesArrays;
