const hydrate = (str) => {
  let sum = 0;
  const splitStr = str.split('');
  for (let i = 0; i < splitStr.length; i += 1) {
    if (!isNaN(splitStr[i])) sum += Number(splitStr[i]);
  }
  let msg = '';
  if (sum === 1) msg = 'copo de água';
  else msg = 'copos de água';
  return `${sum} ${msg}`;
};
console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));
module.exports = hydrate;
