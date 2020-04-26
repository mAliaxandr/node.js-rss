/* eslint-disable no-sync */
const bcrypt = require('bcrypt');
const userService = require('../users/user.service');
const { BYCTYPT_SALT_ROUND } = require('../../common/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

const getHashPassword = password => {
  const salt = bcrypt.genSaltSync(BYCTYPT_SALT_ROUND);
  const hash = bcrypt.hashSync(password, salt);
  console.log('log - service ----', password, hash);
  return hash;
};

const checkHashPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

const getToken = async data => {
  const { login, password } = data;
  const user = await userService.getByLogin(login);
  const isChecedHash = await checkHashPassword(password, user.password);
  if (user && isChecedHash) {
    const token = jwt.sign(
      { userId: user._id, login: user.login },
      JWT_SECRET_KEY,
      { expiresIn: '4h' }
    );
    return token;
  }
};

module.exports = { getHashPassword, checkHashPassword, getToken };
