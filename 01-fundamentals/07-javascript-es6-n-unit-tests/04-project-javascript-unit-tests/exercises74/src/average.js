// Ref. Sum Object - https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

const average = (arrValues) => {
  let avg, sum = 0;
  // checkNumber();
  // checkInfo(arrValues);
  // const sum = (arrValues) => { Object.values(arrValues).reduce((a, b) => a + b); }
  for (let i in arrValues) {
    if (!arrValues || typeof arrValues[i] !== 'number') return 'undefinedxxx';
    sum += arrValues[i];
  }
 
  
  // let sum = Object.values(arrValues).reduce((a, b) => a + b);
  
  avg = (sum / arrValues.length);
  return Math.round(avg);
};

// const sum = (arrValues) => {
 
// }
// const checkInfo = (arrValues) => { if (!arrValues) return 'undefinedxxx'; }

console.log(average([2, 4, 6, 3]));
module.exports = average;
