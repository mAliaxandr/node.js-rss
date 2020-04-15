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

const updateUser = async user => {
  return User.updateOne({ _id: user.id }, user);
};

module.exports = { createUser, getAll, getById, updateUser };
