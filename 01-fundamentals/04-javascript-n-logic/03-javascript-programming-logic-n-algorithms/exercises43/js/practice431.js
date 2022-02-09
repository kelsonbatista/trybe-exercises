// para n>1 fazer um quadrado de asterisco de tamanho n de lado


function makeSquare(n) {

  let lineStars = '';
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      lineStars += '*';
    }
    lineStars += '\n';
  }
  return lineStars;
}

console.log(makeSquare(5));