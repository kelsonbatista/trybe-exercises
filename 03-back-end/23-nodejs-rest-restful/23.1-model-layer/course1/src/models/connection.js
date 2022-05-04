const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  user: "root",
  password: "docker",
  host: "localhost",
  database: "model_example",
  port: 3307,
});

module.exports = connection;
