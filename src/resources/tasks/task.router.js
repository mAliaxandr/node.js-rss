const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoardId(req.boardId);
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
});

router.route('/').post(async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.boardId,
    columnId: req.body.columnId
  });
  tasksService.createTask(newTask);
  res.json(newTask);
});

router.route('/:id').put(async (req, res) => {
  const task = {
    id: req.params.id,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.boardId,
    columnId: req.body.columnId
  };
  tasksService.updateTask(task);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.id);
  res.json({ message: 'task  was deleted' });
});

module.exports = router;
