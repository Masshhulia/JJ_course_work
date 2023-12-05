const { RoadmapsLinks, RoadmapsPages } = require('../models/models');
const ApiError = require('../error/ApiError');

class LinksController {
  async getAllLinks(req, res, next) {
    try {
      console.log('Getting links...');
      const links = await RoadmapsLinks.findAll();
      console.log('Links:', links);
      return res.json(links);
    } catch (error) {
      console.error('Error getting links:', error);
      next(ApiError.internal('Internal Server Error'));
    }
  }

  async getLinksForPage(req, res, next) {
    const { pageID } = req.params;

    try {
      const links = await RoadmapsLinks.findAll({ where: { pages_ID: pageID } });

      if (links.length === 0) {
        return res.status(404).json({ message: 'No links found for the specified page' });
      }

      return res.json(links);
    } catch (error) {
      console.error('Error getting links for the page:', error);
      next(ApiError.internal('Internal Server Error'));
    }
  }

  async getLinkById(req, res, next) {
    const { id } = req.params;

    try {
      const link = await RoadmapsLinks.findByPk(id);

      if (!link) {
        return res.status(404).json({ message: 'Link not found' });
      }

      return res.json(link);
    } catch (error) {
      console.error('Error getting link by ID:', error);
      next(ApiError.internal('Internal Server Error'));
    }
  }
}

module.exports = new LinksController();
