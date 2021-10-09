
// testes diversos

//variavel VAR localmente e console fora // PASSOU
// if (true) {
//   var a = 10;
// }
// console.log(a);

//variavel LET localmente e console fora // ERRO
// if (true) {
//   let a = 10;
// }
// console.log(a);

//variavel LET localmente e console dentro // PASSOU
// if (true) {
//   let a = 10;
//   console.log(a);
// }

//variavel LET localmente e console fora // PASSOU
// let a;
// if (true) {
//   a = 10;
// }
// console.log(a);




// OUTROS TESTES COM VAR LET E CONST
// VARIAVEL TIPO VAR
// function imprimeNumero() {
//   for(var i = 30; i <= 33; i++) {
//     console.log('Dentro do for', i);
//   }
//   console.log('Fora do for', i);
// }
// imprimeNumero();

// function imprimeNumero() {
//   if (true) {
//   var i = 30;
//   i = 40;
//   console.log('Dentro do if', i);
//   }
//   console.log('Fora do if', i);
// }
// imprimeNumero();



// VARIAVEL TIPO LET
// function imprimeNumero() {
//   for(let i = 30; i <= 33; i++) {
//     console.log('Dentro do for', i);
//   }
//   console.log('Fora do for', i);
// }
// imprimeNumero();

// function imprimeNumero() {
//   if (true) {
//   let i = 30;
//   i = 40;
//   console.log('Dentro do if', i);
//   }
//   console.log('Fora do if', i);
// }
// imprimeNumero();


// VARIAVEL TIPO CONST
// function imprimeNumero() {
//   for(const i = 30; i <= 33; i++) {
//     console.log('Dentro do for', i);
//   }
//   console.log('Fora do for', i);
// }
// imprimeNumero();

// function imprimeNumero() {
//   if (true) {
//   const i = 30;
//   i = 40;
//   console.log('Dentro do if', i);
//   }
//   console.log('Fora do if', i);
// }
// imprimeNumero();