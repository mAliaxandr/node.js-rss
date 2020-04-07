const boards = [
  { id: '1', title: 'Board 1', columns: [] },
  { id: '2', title: 'Board 2', columns: [] },
  {
    id: '3',
    title: 'Board 3',
    columns: [
      {
        title: 'Backlog',
        order: 1
      },
      {
        title: 'Sprint',
        order: 2
      }
    ]
  }
];

const getAll = async () => {
  console.log('getAll BOARDS');
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
  console.log('get----------', board);
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
