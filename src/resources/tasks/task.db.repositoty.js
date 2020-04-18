const Task = require('./task.model');

const createTask = async task => {
  return Task.create(task);
};

const getAllByBoardId = async id => {
  return Task.find({ boardId: id });
};

const getById = id => {
  return Task.findOne({ _id: id });
};

module.exports = { createTask, getAllByBoardId, getById };
