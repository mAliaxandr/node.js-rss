const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getAllByBoardId = id => tasksRepo.getAllByBoardId(id);
const getById = id => tasksRepo.getById(id);
const createTask = task => tasksRepo.createTask(task);
const updateTask = task => tasksRepo.updateTask(task);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getAll,
  getAllByBoardId,
  getById,
  createTask,
  updateTask,
  deleteTask
};
