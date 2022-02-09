

// Exercicio principal do bloco

//ITEM 5
// com um for descobrir o maior valor do array

let numbers = [5,9,3,19,70,8,100,2,35,27];
let bigger = 0;
let compare = 0;

for(let i = 0; i < numbers.length-1; i += 1) {

  if (numbers[i+1] > numbers[i]) {
    if (numbers[i+1] > bigger) {
        bigger = numbers[i+1];
    }
  }
}
console.log('O maior número é ' + bigger);



