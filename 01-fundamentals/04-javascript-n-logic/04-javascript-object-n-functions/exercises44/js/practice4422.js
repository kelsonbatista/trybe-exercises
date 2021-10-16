// recebe array de inteiros e retorna maior valor

function higherNumber(array) {

let higher = 0;
let higherIndex = 0;

  // for (let i = 0; i < array.length; i++) {
  for(let i in array) {
    if (array[i] > higher) {
      higher = array[i];
      higherIndex = i; 
    }
  }
  console.log(higherIndex);
}

higherNumber([2, 3, 6, 7, 10, 1])