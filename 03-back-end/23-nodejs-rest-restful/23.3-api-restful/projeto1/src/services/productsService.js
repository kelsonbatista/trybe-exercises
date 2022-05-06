const productModel = require("../models/productsModel");
const productSchema = require("../config/productSchema");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const listProductsService = async () => {
  const products = await productModel.listProducts();
  return products;
};

const getByIdService = async (id) => {
  const product = await productModel.getById(id);
  if (!product)
    throw { status: StatusCodes.NOT_FOUND, message: ReasonPhrases.NOT_FOUND };
  return product;
};

const addProductService = async (name, brand) => {
  const { error } = productSchema.validate({ name, brand });
  if (error) throw { status: StatusCodes.NOT_FOUND, message: error.message };
  const register = await productModel.addProduct(name, brand);
  return register;
};

const deleteProductService = async (id) => {
  const product = await productModel.getById(id);
  const remove = await productModel.deleteProduct(id);
  if (!product)
    throw { status: StatusCodes.NOT_FOUND, message: ReasonPhrases.NOT_FOUND };
  return remove;
};

const updateProductService = async (id, name, brand) => {
  const product = await productModel.getById(id);
  const { error } = productSchema.validate({ name, brand });
  if (error) throw { status: StatusCodes.NOT_FOUND, message: error.message };
  if (!product)
    throw { status: StatusCodes.NOT_FOUND, message: ReasonPhrases.NOT_FOUND };
  const change = await productModel.updateProduct(id, name, brand);
  return change;
};

module.exports = {
  listProductsService,
  getByIdService,
  addProductService,
  deleteProductService,
  updateProductService,
};
