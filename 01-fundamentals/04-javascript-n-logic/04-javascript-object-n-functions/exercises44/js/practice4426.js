// recebe numero inteiro n e retorne somatorio dos numeros

function sumNumbers(number) {

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);
}

sumNumbers(10);