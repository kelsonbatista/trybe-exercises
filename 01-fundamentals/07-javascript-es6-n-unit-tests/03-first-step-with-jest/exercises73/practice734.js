
const encode = (str) => {
  let newString = '';
  const splitString = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < splitString.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (splitString[i] === vowels[j]) splitString[i] = j + 1;
    }
  }
  newString = splitString.join('');
  return newString;
};
// console.log(encode('hi there!'));
const decode = (str) => {
  let newString = '';
  const splitString = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < splitString.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (splitString[i] === (j + 1).toString()) splitString[i] = vowels[j];
    }
  }
  newString = splitString.join('');
  return newString;
};
// console.log(decode('h3 th2r2!'));
module.exports = {encode, decode};