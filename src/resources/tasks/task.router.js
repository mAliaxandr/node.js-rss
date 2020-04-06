const router = require('express').Router();
// const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/board/:id').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoardId(req.params.id);
  res.json(tasks);
  console.log('--TASK--GETall-byId-', req.params.id);
});

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
  console.log('--TASK--GETall--');
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getById(req.params.id);
  res.json(task);
  console.log('--TASK--GET-byId-', req.params.id);
});

module.exports = router;