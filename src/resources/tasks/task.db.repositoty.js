const Task = require('./task.model');

const createTask = async task => {
  return Task.create(task);
};

const getAllByBoardId = async id => {
  return Task.find({ boardId: id });
};

module.exports = { createTask, getAllByBoardId };
