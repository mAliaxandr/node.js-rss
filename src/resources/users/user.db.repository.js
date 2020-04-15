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

module.exports = { createUser, getAll, getById };
