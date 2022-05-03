const authorModel = require("../src/models/authorModel");

const getAuthors = async (_req, res) => {
  try {
    const authors = await authorModel.getAll();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = getAuthors;
