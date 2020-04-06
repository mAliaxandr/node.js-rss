const tasks = [
  {
    id: '1',
    title: 'task 1',
    order: '11',
    description: 'lorem ipsum 111',
    userId: '2',
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

const getById = id => {
  let task = null;
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

const updateTask = async task => {
  let updatedTask;
  tasks.map(item => {
    if (item.id === task.id) {
      item.title = task.title || item.title;
      item.order = task.order || item.order;
      item.description = tasks.description || item.description;
      item.userId = task.userId || item.userId;
      item.boardId = task.boardId || item.boardId;
      item.columnId = task.columnId || item.columnId;
      updatedTask = item;
    }
  });
  return updatedTask;
};

const deleteTask = async id => {
  let deletedTask;
  tasks.map((item, index) => {
    if (item.id === id) {
      deletedTask = item;
      tasks.splice(index, 1);
      return;
    }
  });
  return deletedTask;
};

const deleteUserFromTasks = userId => {
  tasks.map(item => {
    if (item.userId === userId) {
      item.userId = null;
    }
  });
};

module.exports = {
  getAll,
  getAllByBoardId,
  getById,
  createTask,
  updateTask,
  deleteTask,
  deleteUserFromTasks
};
