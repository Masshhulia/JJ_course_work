const Router = require('express');
const questionsController = require('../controllers/questionsController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

// Получить все вопросы
router.get('/questions', authMiddleware, questionsController.getAllQuestions);

// Получить вопрос по ID
//router.get('/questions/:id', authMiddleware,checkRoleMiddleware('ADMIN'), questionsController.getQuestionById);

// Создать новый вопрос
router.post('/questions', authMiddleware, checkRoleMiddleware('ADMIN'), questionsController.createQuestion);

// Получить вопросы по test_id
router.get('/questions/:testId', authMiddleware, questionsController.getQuestionsByTestId); // Изменено на '/questions/test'

module.exports = router;