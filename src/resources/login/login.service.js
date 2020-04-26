/* eslint-disable no-sync */
const bcrypt = require('bcrypt');
const { BYCTYPT_SALT_ROUND } = require('../../common/config');

const getHashPassword = password => {
  const salt = bcrypt.genSaltSync(BYCTYPT_SALT_ROUND);
  const hash = bcrypt.hashSync(password, salt);
  console.log('log - service ----', password, hash);
  return hash;
};

const checkHashPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
module.exports = { getHashPassword, checkHashPassword };
