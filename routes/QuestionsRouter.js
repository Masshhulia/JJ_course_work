const Router = require('express');
const questionsController = require('../controllers/questionsController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router();

router.get('/questions', questionsController.getAllQuestions);
router.get('/questions/:id',authMiddleware,checkRoleMiddleware('ADMIN'), questionsController.getQuestionById);
router.post('/questions',authMiddleware,checkRoleMiddleware('ADMIN'), questionsController.createQuestion);


module.exports = router;
