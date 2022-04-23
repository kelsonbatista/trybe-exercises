const express = require('express');
const mw = require('./middlewares');
const app = express();
const port = 3001;

// app USE é utilizado para usar algum middleware
app.use(express.json());

app.post('/signup', mw.signupMiddleware); // endpoint de cadastro de usuario
app.post('/simpsons', mw.validateTokenMiddleware, mw.postSimpsonsMiddleware);

app.use(mw.authMiddleware); // verifica autenticação - afeta todas as rotas abaixo desse 'use'

app.get('/simpsons', mw.validateTokenMiddleware, mw.getSimpsonsMiddleware);

app.get('/simpsons/:id', mw.validateTokenMiddleware, mw.getSimpsonsByIdMiddleware);


app.use(mw.errorMiddleware);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
})
