const { apiRouter } = require('../api/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
// import morgan from 'morgan';

const { HttpStatus } = require('../constants');

// import * as path from 'path';

const PORT = 8083;
const HOST = '127.0.0.1';

const app = express();

// const corsOptions = {
//   credentials: false,
//   origin: true,
// };

// app.use(cors(corsOptions));

// parse application/x-www-form-urlencode
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// parse application/json
app.use(bodyParser.json());

// app.use(morgan('dev'));

// api router
app.use('/', apiRouter);

// error logging middleware
// eslint-disable-next-line max-params
app.use((err, _req, resp, _next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  resp.status(HttpStatus.InternalError).send(err.message);
});

const startServer = () => {
  app.listen(PORT, HOST, () => {
    // eslint-disable-next-line no-console
    return console.log(`Server started at http://${HOST}:${PORT}`);
  });
};

module.exports = {
  startServer,
};
