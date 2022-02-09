
// resumo de comandos

let fruits = ['Maçã', 'Laranja', 'Kiwi', 'Morango', 'Pera'];
let fruitsList = { morango: 0, banana: 10, limao: 3};

// TOTAL DE ITENS DO ARRAY
console.log(fruits.length); //resp 5
console.log('-------------------------------------');

// MOSTRA O VALOR DO ITEM DO ARRAY
console.log(fruits[1]); // Indice 1 - Laranja
console.log('-------------------------------------');

// MOSTRA O VALOR DO ÚLTIMO ITEM DO ARRAY
console.log(fruits[fruits.length-1]) // Mostra o ultimo - Pera
console.log('-------------------------------------');

// FAZER UM LOOP NO ARRAY
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
console.log('-------------------------------------');

//FOR OF
for(let i of fruits) {
  console.log(i);
}
console.log('-------------------------------------');

// FOR IN
for(let i in fruits) {
  console.log(i);
  console.log(fruits[i]);
}
console.log('-------------------------------------');

for(let i in fruitsList) {
  console.log(i);
  console.log(fruitsList[i]);
}
console.log('-------------------------------------');
// for(let i of fruitsList) {
//   console.log(i);
//   console.log(fruitsList[i]);
// }