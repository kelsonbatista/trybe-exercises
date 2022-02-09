// receber uma string em algarismos romanos e retorne o numero que representa


function convertRomanNumbers(romans) {

  let sum = 0;
  let previous = 0;

  let romanNumbers = {
     I: 1,
     V: 5,
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000,
  }

  // console.log(romanNumbers.V)

  for(let i of romans) {
    let splitRomans = i.split('');
    for(let j = 0; j < splitRomans.length; j++) {
      let current = romanNumbers[splitRomans[j]];
      if(current > previous) {
        sum -= 2 * previous;
        sum += current;
        previous = current;
      } else {
        sum += current;
        previous = current;
      }
    }
  }
  return sum;
}

console.log(convertRomanNumbers(['VI']));
