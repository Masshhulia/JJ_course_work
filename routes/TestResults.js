const express = require('express');
const router = express.Router();
const { saveUserAnswers, calculateTestResult } = require('../middleware/testSessionMiddleware');
const testResultsController = require('../controllers/testresultsConroller');

router.post('/questions', saveUserAnswers, calculateTestResult);
router.get('/results/:id', testResultsController.getResults);

module.exports = router;