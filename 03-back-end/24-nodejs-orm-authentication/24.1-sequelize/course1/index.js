const express = require('express');
const router = require('./routes');
const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server running at port ${port}`));
