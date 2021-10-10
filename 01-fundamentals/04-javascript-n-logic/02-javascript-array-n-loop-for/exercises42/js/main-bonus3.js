
//Buble Sort
// Bonus 3

//let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (!numbers[i+1]) {
    newNumbers.push(numbers[i] * 2);
  } else {
    newNumbers.push(numbers[i+1] * numbers[i]);
  }
}

console.log(newNumbers);

// Ref. consulta de valor inexistente
// https://stackoverflow.com/questions/48140938/check-if-value-doesnt-exist-in-array-of-objects