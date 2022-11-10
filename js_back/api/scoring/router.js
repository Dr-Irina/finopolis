const express = require('express');
const { scoringController } = require('./scoringController');

const scoringRouter = express.Router();

scoringRouter.post('/', scoringController.getReport);

module.exports = { scoringRouter };
