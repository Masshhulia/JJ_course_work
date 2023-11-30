// Ваш роутер для тестов (testsRouter.js)
const Router = require('express');
const testsController = require('../controllers/testsController');

const router = new Router();

router.get('/tests', testsController.getAllTests);
router.get('/tests/:id', testsController.getTestById);

module.exports = router;
