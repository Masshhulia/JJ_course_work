// accountRouter.js
const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middleware/authMiddleware');
const accountController = require('../controllers/AccountController');

router.get('/info', authMiddleware, accountController.getAccountInfo);
router.get('/rating', authMiddleware, accountController.getAllUsers)
router.put('/info', authMiddleware, accountController.updateAccountInfo);



module.exports = router;
