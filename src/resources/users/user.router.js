const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');
const loginService = require('../login/login.service');
const { ErrorHandler } = require('../../error/error');

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    if (users) {
      res.json(users.map(User.toResponse));
    } else {
      throw new ErrorHandler(404, 'No found users');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').get(async (req, res, next) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  try {
    if (user) {
      res.json(User.toResponse(user));
    } else {
      throw new ErrorHandler(404, 'undefined');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/').post(async (req, res, next) => {
  const hash = await loginService.getHashPassword(req.body.password);
  const newUser = new User({
    name: req.body.name,
    login: req.body.login,
    password: hash
  });
  try {
    const created = await usersService.createUser(newUser);
    res.json(User.toResponse(created));
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').put(async (req, res, next) => {
  const user = {
    id: req.params.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };
  try {
    const updatedUser = await usersService.updateUser(user);
    if (updatedUser) {
      res.json('User was updated');
    } else {
      throw new ErrorHandler(404, 'User not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const deletedUser = await usersService.deleteUser(req.params.id);
    if (deletedUser) {
      await tasksService.deleteUserFromTasks(req.params.id);
      res.send('The user deleted');
    } else {
      throw new ErrorHandler(404, 'User not found');
    }
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
