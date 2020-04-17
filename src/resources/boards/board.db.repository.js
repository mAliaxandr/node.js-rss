const Board = require('./board.model');

const createBoard = async board => {
  return Board.create(board);
};

module.exports = { createBoard };
