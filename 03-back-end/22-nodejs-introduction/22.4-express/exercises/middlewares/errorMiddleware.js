const errorMiddleware = (err, req, res, next) => {
  const msg = err.message;
  if(msg === 'Token invalido') return res.status(404).json({ message: "O token é inválido ou inexistente!" });
  if(msg === 'Token menor') return res.status(404).json({ message: "O token deve possuir 16 ou mais caracteres!" });
  return res.status(500).json({ message: `Error 500 - Internal Server Error\n ${msg}` })
}

module.exports = {
  errorMiddleware,
}
