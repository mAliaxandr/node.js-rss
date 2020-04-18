const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const users = [
  new User({ name: 'user1', login: 'admin', password: 'admin' }),
  new User({ name: 'user2', login: 'login2', password: 'pass2' })
];

const boards = [
  new Board({ title: 'board1', columns: [] }),
  new Board({ title: 'board2', columns: [] })
];

const tasks = [
  new Task({
    title: 'task1',
    order: 1,
    description: 'descrip1',
    userId: null,
    boardId: null,
    columnId: null
  }),
  new Task({
    title: 'task2',
    order: 2,
    description: 'descrip2',
    userId: null,
    boardId: null,
    columnId: null
  }),
  new Task({
    title: 'task3',
    order: 3,
    description: 'descrip3',
    userId: null,
    boardId: null,
    columnId: null
  })
];

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connectToBd = async cb => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to bd');
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(bord => bord.save());
    tasks.forEach(task => task.save());
    return cb();
  });
};

module.exports = connectToBd;
