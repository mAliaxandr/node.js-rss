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

module.exports = router;
