const Board = require('./board.model');

const createBoard = async board => {
  return Board.create(board);
};

const getAll = async () => {
  return Board.find({});
};

module.exports = { createBoard, getAll };
