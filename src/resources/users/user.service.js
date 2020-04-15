const usersRepo = require('./user.db.repository');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const createUser = user => usersRepo.createUser(user);
const updateUser = user => usersRepo.updateUser(user);
const deleteUser = id => usersRepo.deleteUser(id);
module.exports = { getAll, getById, createUser, updateUser, deleteUser };
