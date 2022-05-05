const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "docker",
  database: "cep_lookup",
  port: 3307,
});

module.exports = connection;
