// exercicio 9
// menor multiplo
/*
O menor numero divisivel por todos os numeros de 1 a 10 é 2520.
Crie um algoritmo capaz de calcular o menor numero divisivel
por todos os numeros de 1 a um dado numero
*/

function smallest_multiple(roof) {

  let number = 1;
  let smallest = 0;
  let count = 0;

  for (let j = 1; j <= number; j += 1) {
    for (let i = 1; i <= roof; i += 1) {
      if (number % i === 0) {
        count += 1;
        if (count === roof) {
          smallest = number;
          break;
        }
      } else {
        break;
      }
      
    }
    if (smallest > 0) {
      break;
    } else {
      number += 1;
      count = 0;
    }
  }
  console.log(smallest);
  return smallest;
}

smallest_multiple(10);