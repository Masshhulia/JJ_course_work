const Router = require('express');
const questionsController = require('../controllers/questionsController');

const router = new Router();

router.get('/questions', questionsController.getAllQuestions);
router.get('/questions/:id', questionsController.getQuestionById);


module.exports = router;
