const express = require('express');

const { reportsRouter } = require('./reports');
const { scoringRouter } = require('./scoring');
const ApiEndpoints = require('./endpoints');
const apiRouter = express.Router();

apiRouter.use(ApiEndpoints.reports, reportsRouter);
apiRouter.use(ApiEndpoints.scoring, scoringRouter);

module.exports = { apiRouter };
