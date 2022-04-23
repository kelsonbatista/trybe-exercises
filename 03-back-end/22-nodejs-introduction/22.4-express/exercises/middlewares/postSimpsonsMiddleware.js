const fsUtils = require('../utils-fs');

const postSimpsonsMiddleware = async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await fsUtils.readSimpsons();
    const checkId = simpsons.find((simpson) => simpson.id == id);

    if(checkId) return res.status(401).json({ message: 'ID already exists' });
    simpsons.push({ id: `${id}`, name: `${name}` });
    await fsUtils.writeSimpsons(simpsons);
    return res.status(201).end();
  } catch(error) {
    return res.status(500).json({ message: 'Error 500 - Internal Server Error' })
  }
}

module.exports = {
  postSimpsonsMiddleware
}
