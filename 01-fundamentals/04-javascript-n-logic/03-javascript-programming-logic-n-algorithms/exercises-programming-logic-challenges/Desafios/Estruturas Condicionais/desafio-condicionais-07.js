/*

07 - Maior ou menor de idade

Escreva um algoritmo que verifica se a pessoa é maior ou menor de idade.

Caso a pessoa for maior idade retorna:
-----------------------------
"A pessoa é maior de idade.".
-----------------------------

Caso contrário: 
-----------------------------
"A pessoa é menor de idade."
-----------------------------

Bônus: Crie a condição utilizando O Operador Ternário. 

*/

function legalAge(age){
  // Desenvolva seu código nessa função

  let maioridade = (age >=18 ? 'A pessoa é maior de idade.' : 'A pessoa é menor de idade.');
  return maioridade;
 
}
console.log(legalAge(17))
module.exports = legalAge;
