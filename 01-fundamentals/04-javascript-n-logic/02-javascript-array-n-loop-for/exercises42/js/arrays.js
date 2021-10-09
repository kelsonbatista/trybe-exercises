
//melhor metodo - array com os valores
//let pizzas = []; //basico array
let pizzas = ['4 Queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
//no array cada valor tem um indice , começando em 0

//console.log(pizzas); // no array
//console.log('Menu de sabores: ' + pizzas); // em linha

pizzas[5] = 'Peito de Peru'; // colocou na ultima posicao mas se tivesse algo ia sobreescrever
pizzas.push('Gorgonzolla');
//console.log(pizzas);
//console.log(pizzas.length);
//console.log(pizzas.sort());
console.log(pizzas[1]);

pizzas.push('Portuguesa');

for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}