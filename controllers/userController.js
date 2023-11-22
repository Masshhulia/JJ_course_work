const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    // async create(req, res, next) {
    //     try {
    //         const { name, last_name, password, email, job, linked_in } = req.body;
    //         const user = await User.create({ name, last_name, password, email, job, linked_in });
    //         return res.json(user);
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message));
    //     }
    // }

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
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        //const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
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
    
    // async getAll(req, res) {
    //     const users = await User.findAll()
    //     return res.json(users) 
    // }

    // async getOne(req, res) {
    //     // Реализация метода getOne
    // }
}

module.exports = new UserController();
