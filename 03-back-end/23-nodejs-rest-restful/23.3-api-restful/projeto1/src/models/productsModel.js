const connection = require("../config/connection");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const listProducts = async () => {
  const [rows] = await connection.query("SELECT * FROM products");
  return rows;
};

const getById = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM products WHERE id = ?",
    [id]
  );
  if (!result.length) return null;
  return result[0];
};

const addProduct = async (name, brand) => {
  const [result] = await connection.query(
    "INSERT INTO products (name, brand) VALUES (?, ?);",
    [name, brand]
  );
  return {
    id: result.insertId,
    name,
    brand,
  };
};

const deleteProduct = async (id) => {
  const remove = await connection.query("DELETE FROM products WHERE id = ?", [
    id,
  ]);
  return remove;
};

const updateProduct = async (id, name, brand) => {
  const [result] = await connection.query(
    "UPDATE products SET name = ?, brand = ? WHERE id = ?",
    [name, brand, id]
  );
  return {
    id,
    name,
    brand,
  };
};

module.exports = {
  listProducts,
  getById,
  addProduct,
  deleteProduct,
  updateProduct,
};
