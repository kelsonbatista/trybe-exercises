/*

05 - Números divisíveis por 3

Escreva um algoritmo que recebe o inicio e o fim de uma sequência de números inteiros de razão 1.

Conte a quantidade de números da sequência que são diviseis por 3 e considere:

Se houver 50 ou mais retorne:
---------------------------------------
"Há 50 ou mais números diviseis por 3."

Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------

*/

function numbersDivisibleBy3(start, limit){
  // Desenvolva seu código nessa função

  let count = 0;
  let message = '';

  for(let i = start; i <= limit; i++) {
    if(i%3 === 0) {
      count += 1;
    }
  }
  if(count >= 50) {
    message = `Há 50 ou mais números diviseis por 3.`
  } else {
    message = `Sequência muito pequena.`
  }
  return message;
}

console.log(numbersDivisibleBy3(1,150))

module.exports = numbersDivisibleBy3;
