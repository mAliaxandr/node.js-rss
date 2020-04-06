const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
  console.log('--BOARDS--GET--ALL----');
});

module.exports = router;
