const userModel = require('../models/user');

const listUsers = async () => {
  const users = await userModel.findAll();
  return users;
}

module.exports = {
  listUsers,
}
