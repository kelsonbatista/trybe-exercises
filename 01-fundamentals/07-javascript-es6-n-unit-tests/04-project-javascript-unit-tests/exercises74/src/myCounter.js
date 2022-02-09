const myCounter = () => {
  const counter = [];
  for (let i = 0; i < 3; i += 1) {
    counter.push(i);
    for (let j = 2; j <=3; j += 1) {
      counter.push(j);
    }
  }
  return counter;
};
console.log(myCounter());
module.exports = myCounter;
