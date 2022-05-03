const authorModel = require("../src/models/authorModel");

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await authorModel.getAuthorById(id);
    if (!author) return res.status(404).json({ message: "Author not found!" });
    return res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};

module.exports = getAuthorById;
