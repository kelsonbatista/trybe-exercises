const handleError = (err, _req, res, _next) => {
  const msg = err.message;
  console.log(msg);
  return res.status(500).json({ message: "Error 500 - Internal Server Error" });
};

module.exports = handleError;
