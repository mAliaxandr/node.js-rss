const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const getById = id => boardRepo.getById(id);
const createBoard = board => boardRepo.createBoard(board);

module.exports = { getAll, getById, createBoard };
