const { HttpStatus } = require('../../constants');
const {
  getReports,
  setReports,
  getReportById,
} = require('../../db/reports/sqlCommands');

const reportsController = {
  getReports: (_, resp) => {
    getReports()
      .then((result) => {
        resp.status(HttpStatus.Ok);
        resp.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postReports: (req, resp) => {
    setReports(req.body)
      .then(() => {
        resp.status(HttpStatus.Ok);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getReportById: (req, resp) => {
    getReportById(req.params.id)
      .then((result) => {
        resp.status(HttpStatus.Ok);
        resp.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = {
  reportsController,
};
