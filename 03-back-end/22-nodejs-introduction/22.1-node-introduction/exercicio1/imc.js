const readline = require('readline-sync');

const name = readline.question('Please type your name: ');
const weigth = readline.questionFloat('Please type your weigth (kg): ');
const height = readline.questionFloat('Please type your height (m): ');

const imc = weigth / (height * height);
let result = '';

if (imc <= 18.4) {
  result = 'underweight'; 
} else if (imc > 18.4 && imc <= 24.9) {
  result = 'normal';
} else if (imc > 24.9 && imc <= 29.9) {
  result = 'overweight';
} else if (imc > 29.9 && imc <= 34.9) {
  result = 'obese Class 1';
} else if (imc > 34.9 && imc <= 39.9) {
  result = 'obese Class 2';
} else result = 'obese Class 3';

console.log(`${name} your IMC is ${imc.toFixed(2)}. You are ${result}.`);
