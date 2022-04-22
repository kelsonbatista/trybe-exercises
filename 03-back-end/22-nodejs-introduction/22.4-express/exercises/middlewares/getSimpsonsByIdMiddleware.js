const fsUtils = require('../fs-utils');

const getSimpsonsByIdMiddleware = async (req, res) => {
  try {
    const { id } = req.params;
    const simpsons = await fsUtils.readSimpsons();
    const filterId = simpsons.find((item) => item.id == id);
    if(!filterId) return res.status(404).json({ message: 'simpson not found' });
    return res.status(200).json(filterId);
  } catch(error) {
    return res.status(500).json({ message: `Error 500 - Internal Server Error`})
  }
}

module.exports = {
  getSimpsonsByIdMiddleware,
}
