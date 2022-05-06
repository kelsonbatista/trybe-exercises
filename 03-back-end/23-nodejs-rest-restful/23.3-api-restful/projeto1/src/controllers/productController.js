const productService = require("../services/productsService");
const { StatusCodes } = require("http-status-codes");

const listProducts = async (_req, res, next) => {
  try {
    const products = await productService.listProductsService();
    return res.status(StatusCodes.OK).json(products);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const product = await productService.getByIdService(req.params.id);
    return res.status(StatusCodes.OK).json(product);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await productService.addProductService(name, brand);
    return res.status(StatusCodes.CREATED).json(newProduct);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const products = await productService.deleteProductService(req.params.id);
    return res.status(StatusCodes.NO_CONTENT).json(products);
  } catch (err) {
    console.log(`Error found: ${err.message}`);
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const products = await productService.updateProductService(
      req.params.id,
      name,
      brand
    );
    return res.status(StatusCodes.OK).json(products);
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
