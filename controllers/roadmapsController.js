const {Roadmaps} = require('../models/models')
const ApiError = require('../error/ApiError')



class RoadmapsController{
    async create(req, res){
        const {title} = req.body
        const roadmap = await Roadmaps.create({title})
        return res.json(roadmap)
    }
    async getAll(req, res){
      const roadmaps = await Roadmaps.findAll()
      return res.json(roadmaps)  
    }
}

module.exports = new RoadmapsController()