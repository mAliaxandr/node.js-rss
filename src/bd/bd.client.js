const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connectToBd = () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to bd');
  });
};

module.exports = connectToBd;
