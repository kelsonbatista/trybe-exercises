// o mesmo que anterior mas triangulo retangulo com n de base


// function makeTriangle(n) {
  let n = 5;
  let lineStars = '';
  let symbol = '*';

  for(let i = 0; i <= n; i++) {
    console.log(lineStars);
    lineStars += symbol;
  }
  // return lineStars;
// }

// console.log(makeTriangle(5))