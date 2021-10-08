//Parte 1
// let myName = "Kelson";
// let birthCity = "São José dos Campos";
// let birthYear = 1979;
// birthYear = 2030;
// birthCity = "São Paulo";

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

//Parte 2
// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientEmail);
// console.log(typeof patientAge);
// console.log(typeof patientId);

//Continua
// let base = 5;
// let height = 8;
// const area = base * height;
// let perimeter = (base * 2) + (height * 2);

// console.log(area + ' m2');
// console.log(perimeter + ' m');

// Parte 3 if else
// const nota = 80.5;

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovado(a)!");
// } else if (nota >= 60 && nota < 80) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovado(a)!");
// }

// Parte 4 operadores logicos
//Operador AND &&
// const currentHour = 2;
// var message = "";

// if (currentHour >= 22) {
//   message = "Hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Hora de jantar";
// } else if (currentHour >= 14 && currentHour < 18) {
//   message = "Hora do café da tarde";
// } else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço";
// } else if (currentHour >= 6 && currentHour < 11) {
//   message = "Hora do café da manhã";
// } else {
//   message = "Dormindo...";
// }
// console.log(message);

//Operador OU ||
// var weekDay = 'sabado';
// if (weekDay == 'sabado' || weekDay == 'domingo') {
//   console.log("FINALMENTE!!!")
// } else {
//   console.log("Mais um dia de aprendizado");
// }


// Switch case
let resultado = 'aprovado';

switch (resultado) {
  case ('aprovado'):
    console.log("Você foi aprovado(a)!");
    break;
  case ('lista'):
    console.log("Você entrou na lista de espera");
    break;
  case ('reprovado') :
    console.log("Você foi reprovado(a)!");
    break;
  default:
    console.log("Procure a secretaria");
    break;
}