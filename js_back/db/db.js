const { config } = require('./config');
const postgres = require('postgres');

const sql = postgres(config);

module.exports = sql;
