const User = require('./user.model');

const createUser = async user => {
  return User.create(user);
};

module.exports = { createUser };
