const boards = [];

const getAll = async () => {
  return boards;
};

const getById = async id => {
  let board = null;
  boards.map(item => {
    if (item.id === id) {
      console.log('id', item.id);
      board = item;
    }
  });
  return board;
};

const createBoard = async board => {
  boards.push(board);
};

const updateBoard = async board => {
  let updatedBoard;
  boards.map(item => {
    if (item.id === board.id) {
      item.title = board.title || item.title;
      item.columns = board.columns || item.columns;
      updatedBoard = item;
      return;
    }
  });
  return updatedBoard;
};

const deleteBoard = async id => {
  let deletedBoard;
  boards.map((item, index) => {
    if (item.id === id) {
      deletedBoard = item;
      boards.splice(index, 1);
      return;
    }
  });
  return deletedBoard;
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
