/*

04 - Escreva um nome N vezes

Escreva um algoritmo usando a estrutura "FOR" que irá receber um nome e a quantidade de vezes que o mesmo deve ser repetido e retorná-lo.

Por exemplo:
-------------------------------
Entradas:
"João", 5

Saída:
"João, João, João, João, João."
-------------------------------

*/

function repeatName(name, quantity) {
  let verificar = "";
  for (let i = 1 ; i <= quantity; i++) {
    if (i === quantity) {
    verificar += name;
    } else {
      verificar += name + ', ';
    }
  }
  verificar += '.';
  return verificar;
  // Desenvolva seu código nessa função
}

console.log(repeatName('Jose', 5))

module.exports = repeatName;
