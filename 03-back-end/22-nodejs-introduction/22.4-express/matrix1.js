const array = ['1100', '1110', '0110', '0001'];
let count = 0;

for(let i = 0; i < array.length; i += 1) {
  for(let j = 0; j < array[i].length; j += 1) {
    if(array[i][j] == 1 && i !== j) {
      count++;
    }
  }
}

console.log(count);
