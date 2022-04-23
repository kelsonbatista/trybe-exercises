const fsUtils = require('../utils-fs');

const postSimpsonsMiddleware = async (req, res) => {
  try {
    const { id, name } = req.body;
    const { username } = req.user; // informacao do usuario recebido atraves do authMiddleware
    const simpsons = await fsUtils.readSimpsons();
    const checkId = simpsons.find((simpson) => simpson.id == id);

    if(checkId) return res.status(401).json({ message: 'ID already exists' });
    simpsons.push({ id: `${id}`, name: `${name}`, user: `${username}` });
    await fsUtils.writeSimpsons(simpsons);
    // return res.status(201).end();
    return res.status(201).json({ message: "Character successfully added!" });
  } catch(error) {
    return res.status(500).json({ message: `Error 500 - Internal Server Error - ${error}` })
  }
}

module.exports = {
  postSimpsonsMiddleware
}
