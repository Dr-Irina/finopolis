const sql = require('../db');

const getReports = async () => {
  return await sql`select * from reports`;
};

const getReportById = async (id) => {
  return await sql`select * from reports where id=${id}`;
};

const setReports = async (reports) => {
  await sql`insert into reports ${sql(reports, 'id', 'text')}`;
};

module.exports = {
  getReports,
  getReportById,
  setReports,
};
