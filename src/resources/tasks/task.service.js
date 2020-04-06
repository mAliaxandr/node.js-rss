const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getAllByBoardId = id => tasksRepo.getAllByBoardId(id);
const getById = id => tasksRepo.getById(id);

module.exports = { getAll, getAllByBoardId, getById };
