const express = require('express');
const { getRoadmapPage, getAllRoadmapPages } = require('../controllers/RMPagesController');

const router = express.Router();

router.get('/:page_ID', getRoadmapPage);

router.get('/', getAllRoadmapPages);

module.exports = router;
