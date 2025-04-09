const { TestResults, User, Tests } = require('../models/models');
const ApiError = require('../error/ApiError');

class TestResultsController {
  async getResults(req, res, next) {
    try {
      const userId = req.params.id;
      const testId = req.query.testId;

      const results = await TestResults.findAll({
        where: {
          user_id: userId
        },
        include: [
          { model: User },
          { model: Tests }
        ]
      });

      if (!results) {
        return next(ApiError.notFound('Test results not found'));
      }

      return res.json(results);
    } catch (error) {
      next(ApiError.internal('Internal Server Error'));
    }
  }
}

module.exports = new TestResultsController();

