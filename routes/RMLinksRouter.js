const express = require('express');
const router = express.Router();
const linksController = require('../controllers/RMLinksController');

router.get('/links', linksController.getAllLinks);
router.get('/links/page/:pageID', linksController.getLinksForPage); 
router.get('/links/:id', linksController.getLinkById);

module.exports = router;
