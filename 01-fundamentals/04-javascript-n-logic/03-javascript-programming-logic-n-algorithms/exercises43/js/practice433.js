// o mesmo que anterior mas triangulo retangulo com n de base


// function makeTriangle(n) {
  let n = 5;
  let lineStars = '';
  let symbol = '*';
  let pos = n;

  for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= n; j++) {
      if(j < pos) {
        lineStars += ' ';
      } else {
        lineStars += symbol;
      }
    }  
    pos -= 1; 
    lineStars += '\n'; 
  }
  console.log(lineStars);
  // return lineStars;
// }

// console.log(makeTriangle(5))