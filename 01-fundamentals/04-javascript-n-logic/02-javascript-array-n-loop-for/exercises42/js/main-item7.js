
// Exercicio principal do bloco

//ITEM 7
// com um for descobrir o menor valor do array

let numbers = [5,9,3,19,70,8,100,2,35,27];
let smaller = 0;
let compare = 0;

for(let i = 0; i < numbers.length-1; i += 1) {
  if (i == 0) {
    smaller = numbers[0];
  }
  if (numbers[i+1] < numbers[i]) {
    if (numbers[i+1] < smaller) {
        smaller = numbers[i+1];
    }
  }
}
console.log('O menor número é ' + smaller);



