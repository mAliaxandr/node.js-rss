const User = require('./user.model');

const createUser = async user => {
  return User.create(user);
};

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findOne({ _id: id });
};

const getByLogin = async log => {
  return User.findOne({ login: log });
};

const updateUser = async user => {
  return User.updateOne({ _id: user.id }, user);
};

const deleteUser = async id => {
  return await User.deleteOne({ _id: id });
};

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
  getByLogin
};
