const Task = require('./task.model');

const createTask = async task => {
  return Task.create(task);
};

module.exports = { createTask };
