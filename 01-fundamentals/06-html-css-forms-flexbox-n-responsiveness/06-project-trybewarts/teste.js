
function fibonacci(n){
  let number = 2;
  let primeNumbers = [];
  let primeQty = 1;
  let check = 0;
  let prime = 0;
  while (primeQty <= n) {
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        check += 1;
        prime = i;
      }
    }
    if (check === 2) {
      primeQty += 1;
      primeNumbers.push(prime);
    }
    number += 1;
    check = 0;
  }
  console.log(primeNumbers);
}

fibonacci(6);