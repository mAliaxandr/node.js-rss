const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');

const users = [
  new User({ name: 'user1', login: 'admin', password: 'admin' }),
  new User({ name: 'user2', login: 'login2', password: 'pass2' })
];

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connectToBd = async () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to bd');
    db.dropDatabase();
    users.forEach(user => user.save());
  });
};

module.exports = connectToBd;
