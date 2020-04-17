const Board = require('./board.model');

const createBoard = async board => {
  return Board.create(board);
};

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findOne({ _id: id });
};

module.exports = { createBoard, getAll, getById };
