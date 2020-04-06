const tasks = [
  {
    id: '1',
    title: 'task 1',
    order: '11',
    description: 'lorem ipsum 111',
    userId: null,
    boardId: '2',
    columnId: null
  },
  {
    id: '2',
    title: 'task 2',
    order: '22',
    description: 'lorem ipsum 222',
    userId: null,
    boardId: '2',
    columnId: null
  },
  {
    id: '3',
    title: 'task 3',
    order: '33',
    description: 'lorem ipsum 333',
    userId: null,
    boardId: null,
    columnId: null
  }
];

const getAll = async () => {
  return tasks;
};

const getAllByBoardId = async boardId => {
  const selectedTasks = [];
  tasks.map(item => {
    if (item.boardId === boardId) {
      selectedTasks.push(item);
    }
  });
  return selectedTasks;
};

const getById = async id => {
  let task;
  tasks.map(item => {
    if (item.id === id) {
      task = item;
    }
  });
  return task;
};

const createTask = async task => {
  tasks.push(task);
};

module.exports = { getAll, getAllByBoardId, getById, createTask };
