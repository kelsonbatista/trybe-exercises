const readline = require('readline-sync');

function calculator(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (num1 != isNaN || num2 != isNaN || num3 != isNaN) {
      const calc = ((num1 + num2) * num3);
      if (calc < 50) reject(new Error(`Valor muito baixo: ${calc}`));
      resolve(calc);
    } else {
      reject(new Error('Informe apenas números'));
    }
  })
  return promise;
}

// const n1 = readline.questionInt('Enter 1st number: ');
// const n2 = readline.questionInt('Enter 2nd number: ');
// const n3 = readline.questionInt('Enter 3rd number: ');

// calculator(n1,n2,n3)
//   .then(result => console.log(`Resposta: ${result}`))
//   .catch(error => console.log(`Error found: ${error.message}`));

module.exports = {
  calculator
}
