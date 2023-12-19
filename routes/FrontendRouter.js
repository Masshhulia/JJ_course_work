const Router = require('express');
const router = new Router();
const frontendController = require('../controllers/FrontendController.js');

router.get('/steps',  frontendController.getAllRoadmaps);

module.exports = router;
