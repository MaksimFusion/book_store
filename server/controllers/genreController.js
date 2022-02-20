const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')


class GenreController {
    async create(req, res) {
        const {name} = req.body
        const genre = await Genre.create({name})
        return res.json(genre)
    }

    async getAll(req, res) {

    }
}

module.exports = new GenreController()