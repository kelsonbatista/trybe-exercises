const express = require("express");
const router = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => console.log(`App running at port ${port}`));
