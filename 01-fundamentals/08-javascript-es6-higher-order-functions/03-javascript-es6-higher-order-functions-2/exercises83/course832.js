const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.forEach((element) => console.log((element > 0) ? element * (-1) : element));

const negativeNumbers = numbers.map((element) => (element > 0) ? element * (-1) : element);

console.log(negativeNumbers);
