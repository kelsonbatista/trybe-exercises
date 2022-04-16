const { calculator } = require('./exercise1');

// const nb1 = Math.ceil(Math.random() * 10);
// const nb2 = Math.ceil(Math.random() * 10);
// const nb3 = Math.ceil(Math.random() * 10);

// calculator(nb1, nb2, nb3)
//   .then(result => console.log(`Result: ${result}`))
//   .catch(error => console.log(`${error}`));

function getRandomNumbers() {
  return Math.ceil(Math.random() * 10);
}

function myNumbers() {
  const numbers = Array.from({ length: 3 }).map(getRandomNumbers);
  // console.log(...numbers);
  calculator(...numbers)
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`${error}`));
}

myNumbers();
