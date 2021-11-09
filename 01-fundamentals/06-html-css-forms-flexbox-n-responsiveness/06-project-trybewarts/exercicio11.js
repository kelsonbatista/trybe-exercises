// exercicio 11
// cadeia de quadrados de digitos
/*
uma cadeira de numeros é gerada a partir da soma dos quadrados dos digitos do numero anterior ate
que o numero formado ja esteja presente nessa cadeia. Por ex.

Qualquer cadeia que chegue a um numero repetido ficara presa em um looping infinito entre a primeira ocorrencia
desse numero e a segunda ocorrencia dele. 
No caso do 1, a partir da primeira ocorrencia todos os numeros serao 1
Ja no caso do 89, uma vez que ele seja atingido, a sequencia sera exartamente:

O que é mais incrivel é que para qualquer numero inteiro que se inicie essa cadeia ele chegara a 1 ou 89
Construa um algoritmo capaz de contar quantas cadeias terminarao em 89 considerando cadeias que se iniciem
com todos os numeros menores que um dado numero N
*/

function square_digit_chains(n) {
let splitNumber = n.toString().split('');
let numbers = [];
let sum = 0;
let count = 0;

for (let i = 0; i < splitNumber.length; i += 1) {
  numbers.push(+splitNumber[i]);
  sum += numbers[i] * numbers[i];
  if (splitNumber.length === 1) {
    if (sum === 1) {
      break;
    }
  } else if (sum === 89) {
    break;
  }
  
  if((i + 1) === splitNumber.length) {
    splitNumber = sum.toString().split('');
    count += 1;
    i = -1;
    sum = 0;
    numbers = [];
  }
}

console.log(count);
}

square_digit_chains(89);

