const userService = require('../services/userService');

const getAllUsers = async (_req, res, _next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(`Error log: ${err.message}`);
    return res.status(400).json(err);
  }
}

const createUser = async (req, res, _next) => {
  const { fullName, email, phone_num } = req.body;
  try {
    const users = await userService.createUser({ fullName, email, phone_num });
    return res.status(200).json(users);
  } catch (err) {
    console.log(`Error log: ${err.message}`);
    return res.status(400).json(err);
  }
}

const updateUser = async (req, res, _next) => {
  const { id } = req.params;
  const { fullName, email, phone_num } = req.body;
  try {
    const users = await userService.updateUser(id, fullName, email, phone_num);
    return res.status(200).json(users);
  } catch (err) {
    console.log(`Error log: ${err.message}`);
    return res.status(400).json(err);
  }
}

const deleteUser = async (req, res, _next) => {
  const { id } = req.params;
  const { fullName, email, phone_num } = req.body;
  try {
    const users = await userService.deleteUser(id, fullName, email, phone_num);
    return res.status(200).json(users);
  } catch (err) {
    console.log(`Error log: ${err.message}`);
    return res.status(400).json(err);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
