const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const writeLogFile = require("../utils/writeLogToFile");

const errorMiddleware = (err, req, res, _next) => {
  const date = new Date();
  const hour = date.toLocaleTimeString();
  const { method, path } = req;

  const message = `${date.toLocaleString()} - ${err.status} - ${
    err.message
  } - ${method} - ${path}\n`;
  writeLogFile(message);

  if (err.status) {
    return res.status(err.status).json(err.message);
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
};

module.exports = errorMiddleware;
