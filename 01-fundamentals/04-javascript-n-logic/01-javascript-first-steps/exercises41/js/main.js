//ITEM 1
// Cinco contas aritmeticas
// let a = 5;
// let b = 8;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//ITEM 2
// Retornar o valor maior de 2 números
// let n1 = 15;
// let n2 = 8;

// if (n1 > n2) {
//   console.log("O número maior é " + n1);
// } else if (n1 < n2) {
//   console.log("O número maior é " + n2);
// } else {
//   console.log("O número é igual");
// }


//ITEM 3
// Retornar o valor maior de três números
// let n1 = 3;
// let n2 = 10;
// let n3 = 17;

// if (n1 > n2 && n1 > n3) {
//   console.log("O número maior é " + n1);
// } else if (n2 > n1 && n2 > n3) {
//   console.log("O número maior é " + n2);
// } else if (n3 > n1 && n3 > n2) {
//   console.log("O número maior é " + n3);
// } else {
//   console.log("Existem números iguais");
// }


//ITEM 4
// Retonar se o valor é negativo ou positivo
// const n1 = 5;

// if (n1 > 0) {
//   console.log('positive');
// } else {
//   console.log('negative');
// }


// ITEM 5
// Verificar se é um triangulo e se tem angulos invalidos
// let a = 70;
// let b = 65;
// let c = 45;
// let triangulo = (a + b + c) == 180;

// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log("Angulo invalido")
// } else {
//   console.log(triangulo);
// }


//ITEM 6
// Receber o nome da peça de xadrez e retornar os movimentos que ela faz
// tem q reconhecer tanto maiuscula quanto minuscula
// let piece = 'ROOK';
// let lc = piece.toLowerCase();
// let steps = '';

// switch(lc) {
//   case ('king'):
//     console.log('The King can move one square in any direction (up, down, sides and diagonally)');
//     break;

//   case ('queen'):
//     console.log('The Queen can move as far it can in any direction (up, down, sides and diagonally)');
//     break;
  
//   case ('rook'):
//     console.log('The Rook can move as far it can, forward, backward and the sides');
//     break;

//   case ('bishop'):
//     console.log('The Bishop can move as far it can but only diagonally');
//     break;

//   case ('knight'):
//     console.log('The Knight can move two squares in one direction, and then one more move at a 90-degree angle, just like the shape of an “L”.');
//     break;

//   case ('pawn'):
//     console.log('The Pawn can move forward one square at a time, except for their very first move where they can move forward two squares.');
//     break;
  
//   default:
//     console.log('This piece does not exist in chess game.');
//     break;
// }


//ITEM 7
// Associar a nota com uma letra de referencia
// let score = '-1';
// let letter = '';

// if (score >= 90 && score <= 100) {
//   console.log("Score A");
// } else if (score >= 80 && score < 90) {
//   console.log("Score B");
// } else if (score >= 70 && score < 80) {
//   console.log("Score C");
// } else if (score >= 60 && score < 70) {
//   console.log("Score D");
// } else if (score >= 50 && score < 60) {
//   console.log("Score E");
// } else if (score >= 0  && score < 50) {
//   console.log("Score F");
// } else {
//   console.log("Nota invalida. Digite um valor entre 0 e 100.");
// }


//ITEM 8
// Retorna true se pelo menos um numero for par, senao false
// let n1 = 1;
// let n2 = 3;
// let n3 = 5;
// let result = (n1%2 === 0 || n2%2 === 0 || n3%2 === 0);

// console.log(result);


//ITEM 9
// Retorna true se pelo menos um numero for impar, senao false
// let n1 = 21;
// let n2 = 4;
// let n3 = 8;
// let result = ((n1-1)%2 === 0 || (n2-1)%2 === 0 || (n3-1)%2 === 0);

// console.log(result);


//ITEM 10
// Duas constantes (custo do produto e valor de venda)
// Calcular o lucro (venda - custo) com a venda de 1000 unidades
// Custo do produto incide imposto de 20%
// Mensagem de erro se algum dos valores for menor que zero
// let custo = 100;
// let venda = 200;
// let imposto = 20/100;
// let custoTotal = 100 * (1 + imposto);
// let lucro = 1000 * (venda - custoTotal);
// console.log("R$ " + lucro);


// ITEM 11
// Salario bruto menos os descontos (INSS e IR)
let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let descontoINSS;
let descontoIR;
let txINSS1 = 8/100;
let txINSS2 = 9/100;
let txINSS3 = 11/100;
let txIR1 = 7.5/100;
let txIR2 = 15/100;
let txIR3 = 22.5/100;
let txIR4 = 27.5/100;

if (salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * txINSS1;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * txINSS2;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  descontoINSS = salarioBruto * txINSS3;
} else if (salarioBruto > 5189.82) {
  descontoINSS = 570.88;
}

salarioBase = salarioBruto - descontoINSS;

if (salarioBase <= 1903.98) {
  descontoIR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  descontoIR = (salarioBase * txIR1) - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  descontoIR = (salarioBase * txIR2) - 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  descontoIR = (salarioBase * txIR3) - 636.13;
} else if (salarioBase > 4664.68) {
  descontoIR = (salarioBase * txIR4) - 869.36;
}

salarioLiquido = salarioBase - descontoIR;
console.log(salarioLiquido);