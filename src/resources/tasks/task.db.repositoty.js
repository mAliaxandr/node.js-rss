const Task = require('./task.model');

const createTask = async task => {
  return Task.create(task);
};

const getAllByBoardId = async id => {
  return Task.find({ boardId: id });
};

const getById = async id => {
  return await Task.findOne({ _id: id });
};

const updateTask = async task => {
  return await Task.updateOne({ _id: task.id }, task);
};

const deleteTask = async id => {
  return await Task.deleteOne({ _id: id });
};

const deleteTaskWithBoard = async id => {
  return await Task.deleteMany({ boardId: id });
};

const deleteUserFromTasks = async id => {
  return await Task.updateMany({ userId: id }, { userId: null });
};

module.exports = {
  createTask,
  getAllByBoardId,
  getById,
  updateTask,
  deleteTask,
  deleteTaskWithBoard,
  deleteUserFromTasks
};
