const boardRepo = require('./board.db.repository');

const getAll = () => boardRepo.getAll();
const getById = id => boardRepo.getById(id);
const createBoard = board => boardRepo.createBoard(board);
const updateBoard = board => boardRepo.updateBoard(board);
const deleteBoard = id => boardRepo.deleteBoard(id);

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
