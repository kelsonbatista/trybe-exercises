// continuacao exercicio sorteio megasena

let megaSenaNumbers = [];
let myNumbers = [10,22,09,08,07,02];
let acertou = false;

for (let i=0; i <= 5; i++) {
  let n = Math.ceil(Math.random() * 60);
	megaSenaNumbers.push(n);
}

for (let i = 0; i < megaSenaNumbers.length; i++) {
  for (let j = 0; j < myNumbers.length; j++) {

    // console.log('retorno: ', j);

    if (megaSenaNumbers[i] === myNumbers[j]) {
        acertou = true;
        console.log('acertou: ', myNumbers[j]);
    }

  }
}

console.log("Números da megasena: ", megaSenaNumbers);
console.log("Meus números       : ", myNumbers);

if (!acertou) {
  console.log('não acertou: ');
}