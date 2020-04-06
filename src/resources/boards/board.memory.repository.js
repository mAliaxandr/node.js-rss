const boards = [
  { id: '1', title: 'Board 1', columns: [] },
  { id: '2', title: 'Board 2', columns: [] },
  { id: '3', title: 'Board 3', columns: [] }
];

const getAll = async () => {
  console.log('getAll BOARDS');
  return boards;
};

module.exports = { getAll };
