const userService = require('../services/userService');

const listUsers = async (_req, res, _next) => {
  try {
    const users = await userService.listUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(`Error log: ${err.message}`);
    return res.status(400).json(err);
  }
}

module.exports = listUsers;
