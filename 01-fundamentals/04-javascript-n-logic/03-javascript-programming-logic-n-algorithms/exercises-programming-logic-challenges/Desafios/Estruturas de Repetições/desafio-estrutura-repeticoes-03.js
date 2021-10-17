/*

03 - Calcular a soma de 1 até 1000

Escreva um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
--------------------------
"A soma de 1 a 1000 é: x."
--------------------------

*/

function accumulatorThousand(){
  // Desenvolva seu código nessa função
  let sumThousand = 0;
  for (let i=1; i <= 1000; i++) {
    sumThousand += i;
  }
  return(`A soma de 1 até 1000 é ${sumThousand}.`);
}

console.log(accumulatorThousand());

module.exports = accumulatorThousand;
