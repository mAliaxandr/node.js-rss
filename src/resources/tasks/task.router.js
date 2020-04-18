const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');
const { ErrorHandler } = require('../../error/error');

router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAllByBoardId(req.boardId);
    const taskToResponse = tasks.map(item => {
      return Task.toResponse(item);
    });
    if (tasks) {
      res.json(taskToResponse);
    } else {
      throw new ErrorHandler(404, 'Tasks not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.getById(req.params.id);
    if (task) {
      res.json(Task.toResponse(task));
    } else {
      throw new ErrorHandler(404, 'Task not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/').post(async (req, res, next) => {
  const newTask = {
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.boardId,
    columnId: req.body.columnId
  };
  try {
    const created = await tasksService.createTask(newTask);
    if (created) {
      res.json(Task.toResponse(created));
    } else {
      throw new ErrorHandler(404, 'Task not created');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').put(async (req, res, next) => {
  const task = {
    id: req.params.id,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.boardId,
    columnId: req.body.columnId
  };
  try {
    const updated = await tasksService.updateTask(task);
    if (updated) {
      res.json(updated);
    } else {
      throw new ErrorHandler(404, 'Task not updated');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const deleted = await tasksService.deleteTask(req.params.id);
    if (deleted) {
      res.status(204).send('The task deleted');
    } else {
      throw new ErrorHandler(404, 'Task not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
