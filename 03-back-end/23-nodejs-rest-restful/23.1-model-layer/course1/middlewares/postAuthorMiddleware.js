const authorModel = require("../src/models/authorModel");
const nameSchema = require("../utils/validations/nameSchema");

const postAuthor = async (req, res, next) => {
  try {
    const { firstName, middleName, lastName } = req.body;

    const { error } = nameSchema.validate({
      firstName,
      middleName,
      lastName,
    });
    if (error) {
      return res
        .status(404)
        .json({ message: "Missing information or invalid data!" });
    }
    await authorModel.createAuthor(first_name, middle_name, last_name);
    return res.status(201).json({ message: "Author successfully created!" });
  } catch (error) {
    next(error);
  }
};

module.exports = postAuthor;
