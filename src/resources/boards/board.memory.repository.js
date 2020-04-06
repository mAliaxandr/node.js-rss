const boards = [
  { id: '1', title: 'Board 1', columns: [] },
  { id: '2', title: 'Board 2', columns: [] },
  { id: '3', title: 'Board 3', columns: [] }
];

const getAll = async () => {
  console.log('getAll BOARDS');
  return boards;
};

const getById = async id => {
  let board;
  boards.map(item => {
    if (item.id === id) {
      console.log('id', item.id, id);
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

module.exports = { getAll, getById, createBoard, updateBoard };
