const express = require('express');
const { reportsController } = require('./reportsController');

const reportsRouter = express.Router();

reportsRouter.get('/', reportsController.getReports);
reportsRouter.get('/:id', reportsController.getReportById);
reportsRouter.post('/set', reportsController.postReports);

module.exports = { reportsRouter };
