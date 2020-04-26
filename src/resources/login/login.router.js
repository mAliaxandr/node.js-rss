const router = require('express').Router();
const loginService = require('./login.service');
const { ErrorHandler } = require('../../error/error');

router.route('/').post(async (req, res, next) => {
  try {
    const jwtToken = await loginService.getToken(req.body);
    if (jwtToken) {
      res.status(200).json({ token: jwtToken });
    } else {
      throw new ErrorHandler(403, 'Forbidden');
    }
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
