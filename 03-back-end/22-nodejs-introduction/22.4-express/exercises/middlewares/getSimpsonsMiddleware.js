const fsUtils = require('../utils-fs');

const getSimpsonsMiddleware = async (req, res, _next) => {
  try {
    const simpsons = await fsUtils.readSimpsons();
    return res.status(200).json(simpsons);
  } catch(error) {
    return res.status(500).json({ message: `Error 500: Internal Server Error` })
  }
}

module.exports = {
  getSimpsonsMiddleware
}
