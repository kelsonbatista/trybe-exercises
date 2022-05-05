const productService = require("../services/productsService");

const listProducts = async (_req, res, next) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await productService.registerProduct(name, brand);
    return res.status(201).json(newProduct);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const products = await productService.removeProduct(req.params.id);
    return res.status(204).json(products);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const products = await productService.changeProduct(
      req.params.id,
      name,
      brand
    );
    return res.status(200).json(products);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

module.exports = {
  listProducts,
  getById,
  addProduct,
  deleteProduct,
  updateProduct,
};
