const errorMiddleware = (err, req, res, next) => {
  const msg = err.message;
  if(msg === 'Token invalido') return res.status(404).json({ message: "O token é inválido ou inexistente!" });
  if(msg === 'Token menor') return res.status(404).json({ message: "O token deve possuir 16 ou mais caracteres!" });
  if(msg === 'Error email') return res.status(401).json({ message: "Informe o email!" });
  if(msg === 'Error password') return res.status(401).json({ message: "Informe a senha!" });
  if(msg === 'Error firstName') return res.status(401).json({ message: "Informe o nome!" });
  if(msg === 'Error phone') return res.status(401).json({ message: "Informe o telefone!" });
  return res.status(500).json({ message: `Error 500 - Internal Server Error\n ${msg}` })
}

module.exports = {
  errorMiddleware,
}
