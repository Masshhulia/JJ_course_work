
const Router = require('express');
const testsController = require('../controllers/testsController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.get('/tests', testsController.getAllTests);
router.get('/tests/:id', authMiddleware, testsController.getTestById);
router.post('/tests', authMiddleware, checkRoleMiddleware('ADMIN'), testsController.createTest);

module.exports = router;
