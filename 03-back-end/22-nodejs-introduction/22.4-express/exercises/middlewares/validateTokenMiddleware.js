const validateTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenLength = token && token.length; // verifica se não existe autorização
  if(!token || tokenLength < 16) return res.status(401).json({ message: "Token inválido!" });
  next();
}

module.exports = {
  validateTokenMiddleware
}