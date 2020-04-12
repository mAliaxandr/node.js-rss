const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');
const { ErrorHandler } = require('../../error/error');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    if (boards) {
      res.json(boards);
    } else {
      throw new ErrorHandler(404, 'User not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.getById(req.params.id);
    if (board) {
      res.json(board);
    } else {
      throw new ErrorHandler(404, 'Board not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/').post(async (req, res, next) => {
  const board = new Board({
    title: req.body.title,
    columns: req.body.columns
  });
  try {
    await boardsService.createBoard(board);
    res.json(board);
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').put(async (req, res, next) => {
  const board = {
    id: req.params.id,
    title: req.body.title,
    columns: req.body.columns
  };
  try {
    const updated = await boardsService.updateBoard(board);
    if (updated) {
      res.json(board);
    } else {
      throw new ErrorHandler(404, 'Board not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const deletedBoard = await boardsService.deleteBoard(req.params.id);
    await tasksService.deleteTaskWithBoard(req.params.id);
    if (deletedBoard) {
      res.json(deletedBoard);
    } else {
      throw new ErrorHandler(404, 'Board not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
