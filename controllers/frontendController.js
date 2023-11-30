const { Roadmaps } = require('../models/models');
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
  }



module.exports = new FrontendController();