const { Book } = require('../models');

const getBooks = async () => {
  const books = await Book.findAll();
  return books;
}

const getBookById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const createBook = async (title, author, pageQuantity ) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
}

const editBook = async (id, title, author, pageQuantity) => {
  const book = await Book.update({ title, author, pageQuantity }, { where: { id }});
  return book;
}

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id }});
  return book;
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook
}
