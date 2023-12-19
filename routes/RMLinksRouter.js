const express = require('express');
const router = express.Router();
const linksController = require('../controllers/RMLinksController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/links', linksController.getAllLinks);
router.get('/links/page/:pageID', linksController.getLinksForPage); 
router.get('/links/:id', linksController.getLinkById);

router.post('/links',authMiddleware, checkRoleMiddleware('ADMIN') , linksController.createLink); 

module.exports = router;
