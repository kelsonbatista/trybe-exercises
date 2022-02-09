// Usar o find para retornar o primeiro numero do array que é divisivel por 3 e 5

const  numbers = [19, 21, 30, 3, 45, 22, 15];

const findNumber = (number) => (number % 3 === 0 && number % 5 === 0);

const myNumber = numbers.find(findNumber);

console.log(myNumber);
