/*

05 - Encontre o filho mais velho

Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.

Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.

A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------

*/

function findOldestSon(pedroAge, kidsAge){
  
  let oldest = 0;
  let sum = 0;
  let last = 0;

  for(let i = 0; i < kidsAge.length-1; i++) {
    if(kidsAge[i+1] > kidsAge[i]) {
      oldest = kidsAge[i+1];
    } else {
      oldest = kidsAge[i];
    }
    sum += kidsAge[i];
    last = kidsAge[kidsAge.length];
  }
  sum += last;
  if(sum === pedroAge) {
    return `O filho mais velho tem ${oldest} anos.`
  } else {
    return 'Idade dos filhos errada.';
  }
}
console.log(findOldestSon(44,[10,12,22]))
module.exports = findOldestSon;
