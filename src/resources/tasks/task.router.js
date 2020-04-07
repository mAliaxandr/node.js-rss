const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:id/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoardId(req.params.id);
  res.json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await tasksService.getById(req.params.taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
});

router.route('/:id/tasks').post(async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.id,
    columnId: req.body.columnId
  });
  tasksService.createTask(newTask);
  res.json(newTask);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = {
    id: req.params.taskId,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  };
  tasksService.updateTask(task);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.taskId);
  res.json({ message: 'task  was deleted' });
});

module.exports = router;
