const express = require('express');

const { reportsRouter } = require('./reports');
const ApiEndpoints = require('./endpoints');
const apiRouter = express.Router();

apiRouter.use(ApiEndpoints.reports, reportsRouter);

module.exports = { apiRouter };
