const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(format.cli()),
  defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()]
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

module.exports = { logReq };
