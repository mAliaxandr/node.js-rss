const router = require('express').Router();
const loginService = require('./login.service');

router.route('/').post(async (req, res, next) => {
  try {
    const jwtToken = await loginService.getToken(req.body);
    if (jwtToken) {
      res.status(200).json({ token: jwtToken });
    }
    console.log('loginRouter -- token---- ', jwtToken);
  } catch (error) {
    next(error);
    return;
  }
});

module.exports = router;
