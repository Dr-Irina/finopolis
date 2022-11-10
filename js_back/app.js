const { startServer } = require('./server');
const { getMetrics } = require('./internal');

getMetrics();
startServer();
