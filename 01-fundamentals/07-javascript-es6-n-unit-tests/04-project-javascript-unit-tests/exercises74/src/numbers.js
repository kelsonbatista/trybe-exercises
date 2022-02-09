const numbers = (arrNumbers) => {
  for (let i in arrNumbers) {
    if (typeof arrNumbers[i] !== 'number') {
      return false;
    }
  }
  return true;
}

console.log(numbers([2, 4, 6, 3]));
module.exports = numbers;
