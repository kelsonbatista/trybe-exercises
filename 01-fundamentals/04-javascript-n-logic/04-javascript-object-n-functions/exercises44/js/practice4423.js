// retorna o menor valor de uma array

function lowestNumber(array) {

  let lowest = 0;
  let lowestIndex = 0;

  for (let i in array) {
    if (array[i] < lowest) {
      lowest = array[i];
      lowestIndex = i;
    }
  }
  console.log(lowestIndex);
}

lowestNumber([2, 4, 6, 7, 10, 0, -3])