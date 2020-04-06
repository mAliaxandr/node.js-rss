const users = [
  { id: '1', name: 'Alex', login: 'Alex11', password: 'aall' },
  { id: '2', name: 'Nick', login: 'Nick22', password: 'nik123' }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  // console.log('getAll');
  return users;
};

const getById = async id => {
  console.log('getById', id);
  let user;
  users.map(item => {
    if (item.id === id) {
      console.log('id', item.id, id);
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
      users.splice(index, 1);
      return;
    }
  });
  return deletedUser;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
