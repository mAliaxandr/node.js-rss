const { logError } = require('../logging/logger');

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  logError(err);
  err.message = err.statusCode === 500 ? 'Internal server error' : err.message;
  res.status(err.statusCode).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
};

module.exports = {
  handleError,
  ErrorHandler
};
