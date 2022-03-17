const uuid = require('uuid')
const path = require('path')
const {Book} = require('../models/models')
const ApiError = require('../error/ApiError')

class BookController {
    async create(req, res, next) {
        try {
            const {name, price, authorId, genreId} = req.body
            const {img} = req.files
            let fileName = "img_" + uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const book = await Book.create({name, price, authorId, genreId, img: fileName})

            return res.json(book)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {authorId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit
        let books;
        if (!authorId && !genreId) {
            books = await Book.findAndCountAll({limit, offset})
        }
        if (authorId && !genreId) {
            books = await Book.findAndCountAll({where: {authorId}, limit, offset})
        }
        if (!authorId && genreId) {
            books = await Book.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (authorId && genreId) {
            books = await Book.findAndCountAll({where: {authorId, genreId}, limit, offset})
        }
        return res.json(books)
    }

    async getOne(req, res) {
        const {id} = req.params
        const book = await Book.findByPk(id, {
            include: [
                "genre",
                "author",
                "rating",
                { model: Comment, as: "comment", include: ["user"] },
            ],
        })
        return res.json(book)
    }
}

module.exports = new BookController()