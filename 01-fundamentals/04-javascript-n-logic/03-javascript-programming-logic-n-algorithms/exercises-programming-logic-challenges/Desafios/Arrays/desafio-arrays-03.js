/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  // Desenvolva seu código nessa função
  let message = '';
  for(let i = 0; i < names.length; i++) {
    if(guest === names[i]) {
      message = 'O nome está na lista.';
      break;
    } else { 
      message = 'O nome não está na lista.'
    }
  }
  return message;
}
console.log(findGuest(['Joao', 'Maria', 'Jose', 'Roberto', 'Marcos'], 'Joseph'))
module.exports = findGuest;
