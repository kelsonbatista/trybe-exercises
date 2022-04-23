// compara com o usuario existente no banco de dados
const validUser = [
  { username: 'user1', password: 123456 },
  { username: 'user2', password: 123456 },
  { username: 'user3', password: 123456 },
  { username: 'user4', password: 123456 },
  { username: 'user5', password: 123456 },
]

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  // verifica se usuario esta cadastrado
  const findUser = validUser.find((user) => user.username === username);
  if(!findUser) {
    return res.status(401).json({ message: "Invalid credentials (2)!" });
  }

  // verifica se o campo de usuario e senha foram preenchidos
  if(!username || !password) {
    return res.status(401).json({ message: "Username or password can't be blank!" });
  }

  // verifica se o usuario e senha batem com o cadastro
  if(username !== findUser.username || Number(password) !== findUser.password) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  // envia o usuario cadastrado para outros middlewares (ex. mostrar o username)
  // criado um campo de requisição de nome 'user'
  req.user = findUser;
  next();
}

module.exports = {
  authMiddleware,
}
