const soma = (valor1, valor2) => {
  return valor1 + valor2;
};

const summationOf = (value) => {
  //Faz a verificação se valor é diferente de um número
  if (value === '' || isNaN(value)) {
    throw Error('Valores nao numericos nao sao aceitos');
  }

  // Variavel para acumular o somatório do número
  let somatorio = 0;

  // Laço de repetição para fazer o somatório de 1 até o valor recebido
  // no parametro value da função
  for (let i = 1; i <= value; i += 1) {
    somatorio += i;
  }
  return somatorio;
};

/**
 * Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.
 *
 * Por exemplo:
 *
 * - summationOf(1) retorna 1: soma de 1 até 1 = 1
 * - summationOf(3) retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - summationOf(5) retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */

// Fazendo a exportação das funções para que outros arquivos
// possam utiliza-las
module.exports = { soma, summationOf };
