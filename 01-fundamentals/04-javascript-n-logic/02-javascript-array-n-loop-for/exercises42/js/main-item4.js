

// Exercicio principal do bloco

//ITEM 4
// media dos valores da array - se valor maior que 20, mostrar msg

let numbers = [5,9,3,19,70,8,100,2,35,27];
let sum = 0;
let avg = 0;
for(num of numbers) {
  sum += num;
}
avg = sum/numbers.length;
if (avg > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}


