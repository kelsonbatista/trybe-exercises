/*

02 - Contar até 10

Maria está aprendendo lógica de programação e recebeu o seguinte código:

  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}

Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.

*/

function accumulator(limit) {
  // Desenvolva seu código nessa função
	let sumValues = 0;
	for (let i in limit) {
		sumValues += i;
	}
	return sumValues;
	// console.log(sum);
}
accumulator(5);

module.exports = accumulator;
