const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
  console.log('--BOARDS--GET--ALL----');
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
  console.log('----get----BOARD/id--', board);
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

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await boardsService.deleteBoard(req.params.id);
  tasksService.deleteTaskWithBoard(req.params.id);
  res.json(deletedBoard);
  console.log('del -- board---', deletedBoard);
});

module.exports = router;
