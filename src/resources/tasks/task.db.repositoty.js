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

const updateTask = async task => {
  return Task.updateOne({ _id: task.id }, task);
};

const deleteTask = async id => {
  return await Task.deleteOne({ _id: id });
};

module.exports = {
  createTask,
  getAllByBoardId,
  getById,
  updateTask,
  deleteTask
};
