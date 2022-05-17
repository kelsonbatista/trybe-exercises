const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
}

const createUser = async ({ fullName, email, phone_num }) => {
  const user = await User.create({ fullName, email, phone_num });
  return user;
}

const updateUser = async (id, fullName, email, phone_num) => {
  const user = await User.update({ fullName, email, phone_num }, {
    where: {
      id
    }
  });
  return user;
}

const deleteUser = async (id) => {
  const user = await User.destroy({
    where: {
      id
    }
  });
  return user;
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}
