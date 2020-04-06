const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
  console.log('--BOARDS--GET--ALL----');
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  res.json(board);
  console.log('----get----BOARD/id--', id, req.method);
});

module.exports = router;
