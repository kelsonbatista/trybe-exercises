// exercicio 12
// numeros de lychrel
/* 
Numeros palindromos podem ser lidos dos dois lados com o mesmo resultado.
ex. numero 47 + seu reverso 74 = 121 (palindromo).
ex. 349 + 943 = 1292 + 2921 = 4213 + 3124 = 7337 (palindromo)
ou seja 349 leva 3 iteracoes para gerar um palindromo
Alguns jamais chegam a um palindromo como o 196, é o chamado numero de lycherel

Fazer um algoritmo capaz de identificar a qtde de numeros lychrel menores que um dado numero N < 10.000
*/

function lychrel_numbers(n) {

  let count = 0;
  let sum = 0;
  let newNumber = 0;
  for (let i = 1; i <= n; i += 1) {
    let rev = i.toString().split('').reverse().join('');
    rev =+rev;
    newNumber = i + rev;
    for (let j = 1; j <= 50; j += 1) {
      if (i === rev) {
        break;
      } else if (j === 50) {
        count += 1;
      }
    }
  }
  console.log(count);
  return count;
}

lychrel_numbers(10);