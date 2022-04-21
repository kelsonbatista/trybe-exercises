const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age < 18) return res.status(401).json({ "message": "Unauthorized" });
  return res.status(200).json({ "message": `Hello, ${ name } !` });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
