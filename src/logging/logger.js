const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(format.cli()),
  defaultMeta: { service: 'user-service' },
  transports: [
    // new transports.Console(),
    new transports.File({
      filename: 'log/info.log',
      level: 'info',
      format: format.combine(format.json())
    }),
    new transports.File({
      filename: 'log/error.log',
      level: 'error',
      format: format.combine(format.json())
    })
  ]
});

const logReq = (req, res, next) => {
  const { originalUrl, query, body } = req;
  logger.info(
    `url: ${originalUrl}, 
    params: ${JSON.stringify(query)}, 
    body: ${JSON.stringify(body)}`
  );
  next();
};

const logError = err => {
  err.message = !err.message ? 'Internal server error' : err.message;
  err.statusCode = !err.statusCode ? 500 : err.statusCode;
  logger.error(`${err.statusCode}, ${err.message}`);
};

module.exports = { logReq, logError };
