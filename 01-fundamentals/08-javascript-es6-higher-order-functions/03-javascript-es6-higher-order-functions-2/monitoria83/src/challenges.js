// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço 
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require('../data');

function getSandwichPrice(sandwichName) {
  const foundedSandwich = !data.premade.sandwichs.some((sandwich) => sandwich.name === sandwichName);
  if (foundedSandwich) throw new Error('Sanduíche não encontrado');
  const { ingredients } = data.premade.sandwichs[0];
  const { sandwichItems } = data.menu;
  // const ingredientsArray = data.premade.sandwichs[0].ingredients;
  // const itemsArray = data.menu.sandwichItems;
  let newArray = [];
  ingredients.forEach((ingredient) => {
    const correctItem = sandwichItems.find((item) => item.id === ingredient);
    newArray = [...newArray, correctItem];
    // newArray.push(correctItem);
  });
  return newArray.reduce((totalPrice, current) => totalPrice + current.price, 0);
}

function makeSandwich(items) {
  const { sandwichItems } = data.menu; // Minha resolução
  const ingredients = sandwichItems.filter((ingredient) => items.find((item) => ingredient.name === item));
  if (items.length !== ingredients.length) throw new Error('Pedido inválido');
  return ingredients.reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0);
  // items.forEach((item) => { // Resolução da Rosalia
  //   if (ingredient) {
  //     result += ingredient.price;
  //   } else {
  //     throw new Error('Pedido inválido');
  //   }
  // })
  // return result;
}

function getDayMenu(day) {
  const { saleDays } = data;
  const { pizzas } = data.menu;
  if (saleDays.includes(day)) {
    pizzas.forEach((item) => {
      item.price *= (1 - 0.10);
    })
  }
  return data.menu;
}

function getCheapestPizza(price) {
  return data.menu.pizzas.filter((pizza) => pizza.price < price);
}

function getSharedBill(ordersIDs, qtd) {
  const { pizzas, drinks } = data.menu; // desestruturação de objeto, conteudo de terça feira, que eu explico durante a gravação
  const pizzasAndDrinks = [...pizzas, ...drinks];
  const orders = pizzasAndDrinks.filter((order) => ordersIDs.find((item) => order.id === item.id));
  if (orders.length !== ordersIDs.length) throw new Error('Produto não encontrado');
  return orders.reduce((totalPrice, order) => totalPrice + order.price, 0) * 2 / qtd;
}

function getComboSandwichsAndPrices() {

}

module.exports = {
  getSandwichPrice,
  getDayMenu,
  getSharedBill,
  makeSandwich,
  getCheapestPizza,
  getComboSandwichsAndPrices
}

