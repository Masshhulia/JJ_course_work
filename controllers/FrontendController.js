const { Roadmaps, RoadmapsNames, RoadmapsPages, RoadmapsLinks } = require('../models/models');
const ApiError = require('../error/ApiError');

class FrontendController {
    async getAllRoadmaps(req, res, next) {
        try {
            console.log('Getting roadmaps...');
            const roadmaps = await Roadmaps.findAll({
                attributes: ['roadmap_ID', 'title'],
            });
            console.log('Roadmaps:', roadmaps);
            return res.json(roadmaps);
        } catch (error) {
            console.error('Error getting roadmaps:', error);
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async getAllRoadmapsNames(req, res, next) {
        try {
            console.log('Getting roadmaps names...');
            const roadmapsNames = await RoadmapsNames.findAll({
                attributes: ['RoadmapName_id', 'RoadmapName_name', 'RoadmapName_description'],
            });
            console.log('Roadmaps Names:', roadmapsNames);
            return res.json(roadmapsNames);
        } catch (error) {
            console.error('Error getting roadmaps names:', error);
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async getRoadmapById(req, res, next) {
        const { id } = req.params;

        try {
            const roadmapName = await RoadmapsNames.findOne({
                where: { RoadmapName_id: id },
                include: [
                    {
                        model: Roadmaps,
                        include: [
                            {
                                model: RoadmapsPages,
                                include: [
                                    {
                                        model: RoadmapsLinks,
                                        attributes: ['link_title', 'url']
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            if (!roadmapName) {
                return res.status(404).json({ message: 'Дорожная карта не найдена' });
            }

            res.json(roadmapName);
        } catch (error) {
            console.error('Error getting roadmap by ID:', error);
            next(ApiError.internal('Internal Server Error'));
        }
    }
}

module.exports = new FrontendController();