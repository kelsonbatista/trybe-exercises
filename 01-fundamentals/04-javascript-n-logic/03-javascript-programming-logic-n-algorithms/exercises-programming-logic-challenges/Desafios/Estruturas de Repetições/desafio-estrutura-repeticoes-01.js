/*

01 - Mensagem codificada 

Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.

Exemplo:
---------
Entrada:
"Trybe"

Saída:
"036912".
---------

*/

function encode(string){
  let newString = '';
  // for (let i in string)
  for (let i = 0; i <= string; i++) {
    newString += i * 3;
  }
  return newString;
}
console.log(newString);
module.exports = encode;
