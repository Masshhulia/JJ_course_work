const { Tests, Questions, Options } = require('../models/models');
const ApiError = require('../error/ApiError');

class QuizController {
    async getAllQuestions(req, res, next) {
        try {
            const questions = await Questions.findAll({
                include: [Options],
            });
            return res.json(questions);
        } catch (error) {
            console.error('Error fetching questions:', error);
            next(ApiError.internal('Error fetching questions from the database'));
        }
    }

    async getQuestionById(req, res, next) {
        try {
          const questionId = req.params.id;
          const question = await Questions.findByPk(questionId, {
            include: [{ model: Options, as: 'options' }],
          });
      
          if (!question) {
            return next(ApiError.notFound('Question not found'));
          }
      
          return res.json(question);
        } catch (error) {
          
          next(error);
        }
      }
      async createQuestion(req, res, next) {
        try {
            const { question_text } = req.body;
    
            if (!question_text) {
                return next(ApiError.badRequest('Question text is required'));
            }
    
            const question = await Questions.create({ question_text });
    
            return res.json(question);
        } catch (error) {
            console.error('Error creating question:', error);
            next(ApiError.internal('Error creating question in the database'));
        }
    }
    

};

module.exports = new QuizController();
