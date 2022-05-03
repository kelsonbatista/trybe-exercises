const nameSchema = require("../utils/validations/nameSchema");

const postUser = (req, res, next) => {
  // const { firstName, lastName } = req.body;
  const { firstName, lastName } = req.body;
  try {
    const { error } = nameSchema.validate({ firstName, lastName });
    if (error) return res.status(404).json({ message: error.message });
    return res.status(200).json({ message: "User successfully created!" });
  } catch (error) {
    next(error);
  }
};

module.exports = postUser;
