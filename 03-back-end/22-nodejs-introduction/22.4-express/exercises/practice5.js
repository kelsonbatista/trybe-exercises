const express = require('express');
const mw = require('./middlewares');
const app = express();
const port = 3001;

// app USE é utilizado para usar algum middleware
app.use(express.json());

app.get('/simpsons', mw.validateTokenMiddleware, mw.getSimpsonsMiddleware);

app.get('/simpsons/:id', mw.validateTokenMiddleware, mw.getSimpsonsByIdMiddleware);

app.post('/simpsons', mw.validateTokenMiddleware, mw.postSimpsonsMiddleware);

app.post('/signup', mw.signupMiddleware);

app.use(mw.errorMiddleware);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
})
