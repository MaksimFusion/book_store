const uuid = require('uuid')
const path = require('path')
const {Book} = require('../models/models')
const ApiError = require('../error/ApiError')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class BookController {
    async create(req, res, next) {
        try {
            const {name, price, authorId, genreId} = req.body
            const {img} = req.files
            let imgName = "img_" + uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', imgName))

            const book = await Book.create({name, price, authorId, genreId, img: imgName})

            return res.json(book)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {min, max, limit, page} = req.query
        if (page <=0){page = 1}

        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit;
        let where = {}

        if (min && max) {
where.price = {[Op.between]: [+(min), +(max)]}
        }

        if (req.query.author) {
            let author = String(req.query.author).split(",");
            where.authorId = author;
        }

        if (req.query.genre) {
            let genre = String(req.query.genre).split(",");
            where.genreId = genre;
        }

        let books = await Book.findAndCountAll({
            include: ["genre", "author"],
            where,
            limit,
            offset,
            distinct: true,
        });

        books.page = page;
        books.limit = limit;

        return res.json(books)
    }

    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const book = await Book.findByPk(id, {
                include: ["genre","author"    ],
            })
            return res.json(book)
        } catch (e){
            next(ApiError.badRequest(e.message));
        }

    }
}

module.exports = new BookController()