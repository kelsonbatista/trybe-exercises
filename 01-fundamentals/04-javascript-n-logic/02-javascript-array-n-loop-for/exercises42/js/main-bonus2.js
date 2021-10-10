
//Buble Sort
// ordem decrescente

let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 0; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = position;
    }
  }
}

console.log(numbers);