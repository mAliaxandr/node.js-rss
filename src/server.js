const { PORT } = require('./common/config');
const app = require('./app');
const connectToBd = require('./bd/bd.client');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

connectToBd();
