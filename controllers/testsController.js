const { Tests } = require('../models/models');
const ApiError = require('../error/ApiError');

class TestsController {
    async getAllTests(req, res, next) {
        try {
            const tests = await Tests.findAll();
            return res.json(tests);
        } catch (error) {
            console.error('Error fetching tests:', error);
            next(ApiError.internal('Error fetching tests from the database'));
        }
    }

    async getTestById(req, res, next) {
        try {
            const testId = req.params.id;
            const test = await Tests.findByPk(testId);

            if (!test) {
                return next(ApiError.notFound('Test not found'));
            }

            return res.json(test);
        } catch (error) {
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async createTest(req, res, next) {
        try {
            const { test_ID, title, Description } = req.body; 
            const test = await Tests.create({ test_ID, title, Description });
            return res.json(test);
        } catch (error) {
            console.error('Error creating test:', error);
            next(ApiError.internal('Error creating test in the database'));
        }
    }
}

module.exports = new TestsController();