// accountController.js
const ApiError = require('../error/ApiError');
const { User } = require('../models/models');
const path = require('path');
const fs = require('fs');

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
      days: daysOnPlatform,
      roadmap_pdf_url: user.documents 
        // ? `${process.env.BASE_URL || 'https://http://localhost:8080'}/${user.documents}` 
        // : null
    };

    return res.json(responseData);
  } catch (error) {
    next(ApiError.internal('Internal Server Error'));
  }
}

  async getAllUsers(req, res, next) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      next(ApiError.internal('Internal Server Error'));
    }
  }

async downloadDocument(req, res, next) {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (!user || !user.documents) {
            return next(ApiError.notFound('Document not found'));
        }

        // путь относительно папки static
        const documentPath = path.join(__dirname, '../static', user.documents);
      console.log('📄 Trying to download:', documentPath);


        if (!fs.existsSync(documentPath)) {
            return next(ApiError.notFound('File does not exist on server'));
        }

        return res.download(documentPath);
    } catch (error) {
        return next(ApiError.internal('Failed to download document'));
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
