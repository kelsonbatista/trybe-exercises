// Simulando sorteio da Megasena


let megaSenaNumbers = [];
let myNumbers = [10,22,27,35,42,47];
let acertos = 0;

for (let i=0; i <= 5; i++) {
  let n = Math.ceil(Math.random() * 60);
	megaSenaNumbers.push(n);
}

for (let i=0; i < megaSenaNumbers.length; i++) {
  for (let j=0; j < megaSenaNumbers.length; j++) {
    if(myNumbers[i] == megaSenaNumbers[j]) {
      acertos = 1;
    }
  }
  if (acertos == 1) {
    console.log("Acertou:", myNumbers[i]);
    acerto = 0;
  } else {
    console.log("Errou:", myNumbers[i]);
  }
  acertos = 0;
}

console.log("Números da megasena: ", megaSenaNumbers);
console.log("Meus números       : ", myNumbers);