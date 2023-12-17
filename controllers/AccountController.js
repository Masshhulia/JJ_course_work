// accountController.js
const ApiError = require('../error/ApiError');
const { User } = require('../models/models');

class AccountController {
  async getAccountInfo(req, res, next) {
    try {
      const userId = req.user.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return next(ApiError.notFound('User not found'));
      }

      const currentDate = new Date();
      const registrationDate = new Date(user.RegistrationDate); 

      const daysOnPlatform = Math.floor((currentDate - registrationDate) / (1000 * 60 * 60 * 24));

    const responseData = {
        name: user.name,
        last_name: user.last_name,
        job: user.job,
        email: user.email,
        linkedin: user.linked_in,
        days: daysOnPlatform
    };

      return res.json(responseData);
    } catch (error) {
      next(ApiError.internal('Internal Server Error'));
    }
  };
  async getAllUsers(req, res, next) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      next(ApiError.internal('Internal Server Error'));
    }
  }


  async updateAccountInfo(req, res, next) {
    try {
        const userId = req.user.id;
        const { linkedin, job } = req.body;
        const user = await User.findByPk(userId);

        if (!user) {
            return next(ApiError.notFound('User not found'));
        }

        user.linkedin = linkedin;
        user.job = job;
        await user.save();

        return res.json({ linkedin, job });
    } catch (error) {
        next(ApiError.internal('Internal Server Error'));
    }
}
}

module.exports = new AccountController();
