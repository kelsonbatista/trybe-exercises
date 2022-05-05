const productModel = require("../models/productsModel");

const getAll = async () => {
  const products = await productModel.listProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.getById(id);
  return product;
};

const registerProduct = async (name, brand) => {
  const register = await productModel.addProduct(name, brand);
  return register;
};

const removeProduct = async (id) => {
  const remove = await productModel.deleteProduct(id);
  return remove;
};

const changeProduct = async (id, name, brand) => {
  const change = await productModel.updateProduct(id, name, brand);
  return change;
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
  removeProduct,
  changeProduct,
};
