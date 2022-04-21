const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const PORT = 3001;

// END-POINTS
app.get('/recipes', (req, res) => {
   return res.json(recipes.sort((a, b) => (a.name > b.name) ? 1 : -1));
});

app.get('/recipes/name/:name', (req, res) => {
  const { name } = req.params;
  const recipe = recipes.filter((item) => (
    ((item.name).toLowerCase()).includes((name).toLowerCase())
  ));
  if (recipe == '') return res.status(404).json({ message: 'Recipe not found!'});
  return res.status(200).json(recipe);
});

app.get('/recipes/id/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((item) => (item.id) == id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  return res.status(200).json(recipe);
});

app.get('/recipes/search', (req, res) => {
  const { name, price } = req.query;
  const filteredRecipes = recipes.filter((item) => (
    (item.name).toLowerCase().includes(name) && item.price < parseInt(price)
  ));
  return res.status(200).json(filteredRecipes);
});

app.get('/drinks', (req, res) => {
  return res.json(drinks.sort((a, b) => (a.name > b.name) ? 1 : -1));
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((item) => item.id == id);
  if(!drink) return res.status(404).json({ message: 'Drink not found'});
  return res.status(200).json(drink);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
