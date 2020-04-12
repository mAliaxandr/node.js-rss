const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const morgan = require('morgan');
const { createWriteStream } = require('fs');

const app = express();

morgan.token('body', req => {
  return JSON.stringify(req.body);
});
morgan.token('params', req => {
  return JSON.stringify(req.params);
});

app.use(
  morgan(':url :params :body'),
  morgan(':url :params :body', {
    stream: createWriteStream('access.log')
  })
);

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use(
  '/boards/:id/tasks',
  (req, res, next) => {
    req.boardId = req.params.id;
    next();
  },
  taskRouter
);

module.exports = app;
