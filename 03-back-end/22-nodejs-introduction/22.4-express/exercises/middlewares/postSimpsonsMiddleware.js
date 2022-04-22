const fsUtils = require('../fs-utils');

const postSimpsonsMiddleware = async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await fsUtils.readSimpsons();
    const check = simpsons.find((simpson) => simpson.id == id);

    if(check) return res.status(409).json({ message: 'ID already exists' });
    simpsons.push({ id: `${id}`, name: `${name}` });
    await fsUtils.writeSimpsons(simpsons);
    return res.status(204).end();
  } catch(error) {
    return res.status(500).json({ message: 'Error 500 - Internal Server Error' })
  }
}

module.exports = {
  postSimpsonsMiddleware
}
