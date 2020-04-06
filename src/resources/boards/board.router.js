const router = require('express').Router();
const Board = require('./board.model');
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

router.route('/').post(async (req, res) => {
  const board = new Board({
    title: req.body.title,
    columns: req.body.columns
  });
  await boardsService.createBoard(board);
  res.json(board);
  console.log('----Post----BOARD/create--');
});

router.route('/:id').put(async (req, res) => {
  const board = {
    id: req.params.id,
    title: req.body.title,
    columns: req.body.columns
  };
  await boardsService.updateBoard(board);
  res.json(board);
  console.log('----Put----BOARD/update--');
});

module.exports = router;
