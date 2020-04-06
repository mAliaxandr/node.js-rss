const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
  console.log('----get----/users');
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.json(User.toResponse(user));
  console.log('----get----users/id--', id, req.method);
});

router.route('/').post(async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  console.log('----Post----users/id--', req.body);
  await usersService.createUser(newUser);
  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  // const id = req.params.id;
  // const user = await usersService.getById(id);
  const user = {
    id: req.params.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };
  // user.name = req.body.name;
  // user.login = req.body.login;
  // user.password = req.body.password;
  const updatedUser = await usersService.updateUser(user);
  res.json(User.toResponse(updatedUser));
  console.log('----PUT----users/id--', updatedUser);
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  // const user = await usersService.getById(id);

  const deletedUser = await usersService.deleteUser(id);
  res.json(User.toResponse(deletedUser));
  console.log('---DELETE----users/id--', deletedUser);
});

module.exports = router;
