const { RoadmapsPages, Roadmaps } = require('../models/models');
const { Op } = require('sequelize');
const ApiError = require('../error/ApiError');

class RoadmapsPagesController {
    async getRoadmapPage(req, res, next) {
        const { page_ID } = req.params;

        try {
            const page = await RoadmapsPages.findOne({
                where: {
                    page_ID: {
                        [Op.eq]: page_ID,
                    },
                },
                include: [Roadmaps],
            });

            if (!page) {
                return res.status(404).json({ error: 'Page not found' });
            }

            return res.json(page);
        } catch (error) {
            console.error('Error fetching roadmap page:', error);
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async getAllRoadmapPages(req, res, next) {
        try {
            console.log('Getting all roadmap pages...');
            const pages = await RoadmapsPages.findAll({
                attributes: ['page_ID', 'title'],
                include: [Roadmaps],
            });
            console.log('Roadmap Pages:', pages);
            return res.json(pages);
        } catch (error) {
            console.error('Error getting roadmap pages:', error);
            next(ApiError.internal('Internal Server Error'));
        }
    }
}

module.exports = new RoadmapsPagesController();
