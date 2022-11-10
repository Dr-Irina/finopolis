const { HttpStatus } = require('../../constants');

const scoringController = {
  getReport: (req, resp) => {
    console.log(req.body);

    resp.status(HttpStatus.Ok);
    resp.send({ id: 1 });
  },
};

module.exports = {
  scoringController,
};
