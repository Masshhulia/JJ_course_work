const Router = require('express');
const router = new Router();
const frontendController = require('../controllers/FrontendController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

router.get('/steps', authMiddleware, frontendController.getAllRoadmaps);

module.exports = router;
