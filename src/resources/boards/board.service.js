const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const getById = id => boardRepo.getById(id);

module.exports = { getAll, getById };
