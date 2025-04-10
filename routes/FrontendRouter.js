const Router = require('express');
const router = new Router();
const frontendController = require('../controllers/FrontendController.js');

router.get('/steps',  frontendController.getAllRoadmaps);
router.get('/rmnames', frontendController.getAllRoadmapsNames);
router.get('/rmnames/:id', frontendController.getRoadmapById);

module.exports = router;
