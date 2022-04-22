const express = require('express');
const mw = require('./middlewares');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/simpsons', mw.validateTokenMiddleware, mw.getSimpsonsMiddleware);

app.get('/simpsons/:id', mw.getSimpsonsByIdMiddleware);

app.post('/simpsons', mw.postSimpsonsMiddleware);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
})
