const users = [
  { id: 1, name: 'Alex', login: 'Alex11', password: 'aall' },
  { id: 2, name: 'Nick', login: 'Nick22', password: 'nik123' }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  console.log('getAll');
  return users;
};

const getById = async id => {
  console.log('getById', id);
  let user;
  users.map(item => {
    if (item.id === +id) {
      console.log('id', item.id, +id);
      user = item;
    }
  });
  return user;
};

module.exports = { getAll, getById };
