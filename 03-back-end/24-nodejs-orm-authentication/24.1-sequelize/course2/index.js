const express = require('express');
const router = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const port = 3002;
const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running at port ${port}`));
