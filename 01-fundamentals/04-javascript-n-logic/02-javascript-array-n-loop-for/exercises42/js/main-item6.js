

// Exercicio principal do bloco

//ITEM 6
// mostrar quantos numeros impares e imprimir mensagem (se houver ou nao)

let numbers = [5,9,3,19,70,8,100,2,35,27];
let odd = 0;

for(let i = 0; i < numbers.length; i += 1) {
  if (numbers[i]%2 !== 0) {
    odd += 1;
  }
}
if (odd > 0) {
  console.log('Existem ' + odd + ' números ímpares');
} else {
  console.log('Nenhum valor ímpar encontrado')
}




