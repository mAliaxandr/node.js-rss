const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: String,
  columns: Array,
  _id: {
    type: String,
    default: uuid
  }
});

const Board = mongoose.model('Board', boardSchema);

// class Board {
//   constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }
// }

module.exports = Board;
