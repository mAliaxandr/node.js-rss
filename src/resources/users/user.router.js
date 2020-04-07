const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  await usersService.createUser(newUser);
  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const user = {
    id: req.params.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };
  const updatedUser = await usersService.updateUser(user);
  res.json(User.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  const deletedUser = await usersService.deleteUser(id);
  res.json(User.toResponse(deletedUser));
});

module.exports = router;
