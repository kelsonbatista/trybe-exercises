const calculator = (n1, n2) => {
  
  return `{ sum: ${n1 + n2}, mult: ${n1 * n2}, div: ${Math.floor(n1 / n2)}, sub: ${n1 - n2} }`
}
// console.log(calculator(1, 2));
const arrayGenerator = (type, obj) => {
  let result = [];
  if (type === 'keys') {
    result = Object.keys(obj);
  } 
  
  if (type === 'values') {
    result = Object.values(obj);
  } 
  
  if (type === 'entries'){
    result = Object.entries(obj);
  }
  return result;
}
console.log(arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }))
module.exports = {calculator, arrayGenerator};
