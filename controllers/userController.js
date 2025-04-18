const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email) => {
    const role = email === 'ADMIN' ? 'ADMIN' : 'user';
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
   
    async getAll(req, res, next) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            next(ApiError.internal('Internal Server Error'));
        }
    }
    
    async getOne(req, res, next) {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            
            if (!user) {
                return next(ApiError.notFound('User not found'));
            }
    
            return res.json(user);
        } catch (error) {
            next(ApiError.internal('Internal Server Error'));
        }
    }
    

    async registration(req, res, next) {
        try {
            const { email, password, name, last_name, job, linked_in, role = 'user' } = req.body;
    
            if (!email || !password || !name || !last_name || !job || !linked_in) {
                return next(ApiError.badRequest('Некорректные данные пользователя'));
            }
    
            const candidate = await User.findOne({ where: { email } });
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }
    
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, role, password: hashPassword, name, last_name, job, linked_in });
            const token = generateJwt(user.id, user.email, user.role);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    
    

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController();
