const express = require("express");
const cepController = require("./controllers/cepController");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/ceps", cepController.getCeps);

app.get("/ceps/:cep", cepController.getCepByNumber);

app.post("/ceps", cepController.addCep);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
