const users = [
  { id: 1, name: 'Alex', login: '123sas' },
  { id: 2, name: 'Nick', login: '456nik' }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

module.exports = { getAll };
