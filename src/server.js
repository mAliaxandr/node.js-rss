const { PORT } = require('./common/config');
const app = require('./app');
const connectToBd = require('./bd/bd.client');

const startApp = () => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
};

connectToBd(startApp);
