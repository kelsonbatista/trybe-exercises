const express = require('express');
const app = express();
const port =  3001;

const { 
  getSimpsonsMiddleware,
  getSimpsonsByIdMiddleware,
  postSimpsonsMiddleware,
  validateTokenMiddleware,
} = require('./middlewares');

app.use(express.json());

app.get('/simpsons', validateTokenMiddleware, getSimpsonsMiddleware);

app.get('/simpsons/:id', getSimpsonsByIdMiddleware);

app.post('/simpsons', postSimpsonsMiddleware);

app.listen(port, () => {
  console.log(`App running at port ${port}`);
})
