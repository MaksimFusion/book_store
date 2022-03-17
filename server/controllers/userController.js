const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const uuid = require("uuid");
const path = require("path");
const db = require("../models/models");
const saltRounds = 10;

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Неправильный email или пароль'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 4)
            const user = await User.create({email, role, password: hashPassword})
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch (e) {
            return res
                .status(400)
                .json({ status: false, message: "Ошибка в регистрации" });
        }
        }

    async login(req, res, next) {
const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
        return next(ApiError.internal('Пользователь не найден'))
    }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async updateUser (res,req) {
        try {
            let img = ""
            const {file} = req.files
            let fileName = "avatar" + uuid.v4() + ".jpg";
            file.mv(path.resolve(__dirname, "..", "static", fileName))
            const { id, email } = req.user;
            const {name} = req.body

            const user = await User.findOne({where:{email}})

            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: "Такого пользователя нет",
                });
            }

            let status = await User.update(
                {name, img: fileName},
                { where: { email}}
            )
            const updatedUser = await User.findOne({ where: { email} });
            delete updatedUser.password;

            const token = generateJwt(updatedUser);
            return res.json({
                status: true,
                user: updatedUser,
                token
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                message: `Ошибка!`,
            });
        }
    }

    async updatePassword(req, res) {
        try {
            const {id, email} = req.user;
            const {newPassword, oldPassword} = req.body;
            const user = await db.User.findOne({where:{email: email}})
            if (!user) {
                return res
                    .status(400)
                    .json({ status: false, message: "Такого пользователя нет" });
            }
            const validPassword = await bcrypt.compare(oldPassword, user.password);
            if (!validPassword) {
                return res
                    .status(400)
                    .json({ status: false, message: `Неверный пароль` });
            }
            const hashPassword = await bcrypt.hash(newPassword, saltRounds);
            const status = await db.User.update(
                {password: hashPassword},{ where: { email: email } }
            );

            const updatedUser = await db.User.findOne({ where: { email: email } });
            delete updatedUser.password;

            const token = generateJwt(updatedUser);
            return res.json({
                status: true,
                user: updatedUser,
                token
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                message: `Ошибка!`,
            });
        }
    }
}


module.exports = new UserController()