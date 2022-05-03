const getAuthors = require("./getAuthorsMiddleware");
const getAuthorById = require("./getAuthorByIdMiddleware");
const postAuthor = require("./postAuthorMiddleware");
const postUser = require("./postUserMiddleware");

module.exports = {
  getAuthors,
  getAuthorById,
  postAuthor,
  postUser,
};
