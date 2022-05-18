const express = require('express');
const userController = require('../controllers/userController');

const booksRouter = express.Router();

booksRouter.get('/', userController.getBooks);

booksRouter.get('/:id', userController.getBookById);

booksRouter.post('/', userController.createBook);

booksRouter.put('/:id', userController.editBook);

booksRouter.delete('/:id', userController.deleteBook);

module.exports = booksRouter;
