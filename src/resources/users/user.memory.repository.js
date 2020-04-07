const tasksService = require('../tasks/task.service');

const users = [];

const getAll = async () => {
  return users;
};

const getById = async id => {
  let user;
  users.map(item => {
    if (item.id === id) {
      user = item;
    }
  });
  return user;
};

const createUser = async user => {
  users.push(user);
};

const updateUser = async user => {
  let updatedUser;
  users.map(item => {
    if (item.id === user.id) {
      item.name = user.name || item.name;
      item.login = user.login || item.login;
      updatedUser = item;
      return;
    }
  });
  return updatedUser;
};

const deleteUser = async id => {
  let deletedUser;
  users.map((item, index) => {
    if (item.id === id) {
      deletedUser = item;
      tasksService.deleteUserFromTasks(id);
      users.splice(index, 1);
      return;
    }
  });
  return deletedUser;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
