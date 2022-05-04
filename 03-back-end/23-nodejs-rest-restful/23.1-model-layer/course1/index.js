const express = require("express");
const mw = require("./middlewares");
const handleError = require("./utils/handleError");
const app = express();
const port = process.env.port || 3001;

app.use(express.json());

app.get("/authors", mw.getAuthors);

app.get("/authors/:id", mw.getAuthorById);

app.post("/authors", mw.postAuthor);

app.post("/user", mw.postUser);

app.use(handleError);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.
