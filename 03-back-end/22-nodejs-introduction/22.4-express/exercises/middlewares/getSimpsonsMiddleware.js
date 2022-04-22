const fsUtils = require('../fs-utils');

const getSimpsonsMiddleware = async (req, res, _next) => {
  try {
    const simpsons = await fsUtils.readSimpsons();
    // console.log(req.headers);
    // const token = req.headers.authorization;
    // if(!token) return res.status(401).json({ message: "Você não tem autorização para acessar essa página!" });
    return res.status(200).json(simpsons);
  } catch(error) {
    return res.status(500).json({ message: `Error 500: Internal Server Error` })
  }
}

module.exports = {
  getSimpsonsMiddleware
}
