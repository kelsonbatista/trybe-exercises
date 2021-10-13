// Simulando sorteio da Megasena


let megaSenaNumbers = [];
let myNumbers = [10,22,09,08,07,02];

for (let i=0; i <= 5; i++) {
  let n = Math.ceil(Math.random() * 60);
	megaSenaNumbers.push(n);
}

for (let i=0; i <= megaSenaNumbers.length; i++) {

  for (let j=0; j <= megaSenaNumbers.length; j++) {

    if(myNumbers[i] == megaSenaNumbers[j]) {
      console.log("Acertou: ", i)
    } else {
      console.log("Não acertou: ", i) 
    }
  }
}

console.log("Números da megasena: ", megaSenaNumbers);
console.log("Meus números       : ", myNumbers);