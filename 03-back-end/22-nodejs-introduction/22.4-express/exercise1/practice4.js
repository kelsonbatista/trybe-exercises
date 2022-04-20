const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
