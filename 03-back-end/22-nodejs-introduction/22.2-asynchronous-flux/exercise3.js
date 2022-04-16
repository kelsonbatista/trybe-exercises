const { calculator } = require('./exercise1');

function getRandomNumbers() {
  return Math.ceil(Math.random() * 10);
}

async function myNumbers() {
  const numbers = Array.from({ length: 3 }).map(getRandomNumbers);
  try {
    const result = await calculator(...numbers);
    console.log(`Result: ${result}`);
  } catch(error) {
    console.log(`${error}`);
  }
}

myNumbers();
