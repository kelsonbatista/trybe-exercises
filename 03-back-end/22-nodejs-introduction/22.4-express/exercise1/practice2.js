const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello ${ name }!` });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
