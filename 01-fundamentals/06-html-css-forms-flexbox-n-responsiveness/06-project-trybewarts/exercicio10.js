// exercicio 10
// diferença das soma dos quadrados e quadrados da soma
/*

*/


function sum_square_difference(n) {
let diff = 0;
let quadSoma = 0;
let somaQuad = 0;

for (let i = 1; i <= n; i += 1) {
  quadSoma += i;
  somaQuad += (i * i);
}
quadSoma *= quadSoma;
diff = Math.abs(quadSoma - somaQuad);
console.log(diff);
return diff;
}

sum_square_difference(12);