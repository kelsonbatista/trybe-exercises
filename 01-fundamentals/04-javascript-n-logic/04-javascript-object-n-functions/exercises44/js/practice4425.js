// array com inteiros e retornar o que mais se repete


function mostRepeat(array) {

  let count = 0;
  let countMax = 0;
  let countIndex = 0;
  let countIndexMax = 0;

  for (let i in array) {
    for(let j in array) {
      if (array[i] === array[j]) {
        count += 1;
        countIndex = i;
      }
    }
    if (count > countMax) {
      countMax = count;
      countIndexMax = countIndex;
    } 
    count = 0;
    countIndex = 0;
  }
  console.log(array[countIndexMax]);
}

mostRepeat([2, 3, 2, 5, 8, 2, 3, 3, 4, 3, 10, 10, 8, 10, 8, 1, 10, 9, 10, 7, 2, 10])