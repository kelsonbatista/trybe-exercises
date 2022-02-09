/* 1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares 
 e ímpares no formato: 
 { pares: 0,
   impares: 0 } */

  

function criarNumeros(numeros) { //

  let quantidade = {
    pares: 0,
    impares: 0,
  }
  // for(let i = 0; i < numbers.lenght; i++) {
    // if(numbers[i]%2 === 0) {
  for(let i of numbers) {
    if(i%2 === 0) {
      pares += 1;
    } else {
      impares += 1;
    }
  }
  return quantidade;
}

let numbers = [2, 5, 7, 8, 10, 13, 15];
// criarNumeros(numbers);
console.log(criarNumeros(numbers));

