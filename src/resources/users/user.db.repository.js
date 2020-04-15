const User = require('./user.model');

const createUser = async user => {
  return User.create(user);
};

const getAll = async () => {
  return User.find({});
};

module.exports = { createUser, getAll };
