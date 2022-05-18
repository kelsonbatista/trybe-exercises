const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const bookService = require('../services/bookService');

const getBooks = async (_req, res, next) => {
  try {
    const books = await bookService.getBooks();
    return res.status(StatusCodes.OK).json(books);
  } catch (err) {
    console.log(`Error: ${err}`);
    next(err);
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    console.log(`Error: ${err}`);
    next(err);
  }
}

const createBook = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await bookService.createBook(title, author, pageQuantity);
    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    console.log(`Error: ${err}`);
    next(err);
  }
}

const editBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await bookService.editBook(id, title, author, pageQuantity);
    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    console.log(`Error: ${err}`);
    next(err);
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await bookService.deleteBook(id);
    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    console.log(`Error: ${err}`);
    next(err);
  }
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook
};
