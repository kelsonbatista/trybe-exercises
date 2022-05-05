const express = require("express");
const productController = require("../../controllers/productController");

const productRouter = express.Router();

productRouter.get("/", productController.listProducts);

productRouter.get("/list-products", productController.listProducts);

productRouter.get("/get-by-id/:id", productController.getById);

productRouter.post("/add-product", productController.addProduct);

productRouter.delete("/delete-product/:id", productController.deleteProduct);

productRouter.put("/update-product/:id", productController.updateProduct);

module.exports = productRouter;
