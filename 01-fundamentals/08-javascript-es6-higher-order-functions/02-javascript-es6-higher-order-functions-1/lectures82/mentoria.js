// mentoria invertida

const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432
*/


/// OBS Nao é possivel colocar o forEach em variavel pois essa funcao sempre torna undefined
// for EACH nao retorna
let evenProductsId = [];
techProducts.forEach( (elemento) => {
  if (elemento.id % 2 === 0) {
    evenProductsId.push(elemento);
  }
  // return evenProductsId;
  // console.log(evenProductsId);
});

//2 Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
// so foi criado variavel false por motivos didaticos mas nao precisaria
let priceFalse = false;
// let precoProduto = techProducts.some((elemento) => {
//   if (elemento.price > 300) {
//     priceFalse = true;
//   }
//   return priceFalse;
// });
let precoProduto = techProducts.some((elemento) => elemento.price > 300);
// console.log(precoProduto);

// 3 Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
const totalPrice = (id, qty) => techProducts.find( (product) => product.id === id ).price * qty;

console.log(totalPrice(2, 5));
