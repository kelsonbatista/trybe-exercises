const express = require('express');

const app = express();

const PORT = 3001;

app.get('/hello', (req, res) => {
  res.status(200).send('<h1>Entrou na página hello!</h1>');
});

app.get('/pagina2', (req, res) => {
  res.status(200).send('Entrouuuuu pagina 2');
})

app.post('/senduser', (req, res) => {
  res.status(200).send('teste de post');
})

app.listen(PORT, () => {
  console.log(`App conectado na porta ${PORT}`);
});
