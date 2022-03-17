const ApiError = require("../error/ApiError")
const db = require("../models/models");

class RatingController {
    async updateBookRating(req, res, next) {
        try {
            let {bookId, userId, rate} = req.body
            let candidate = await db.Rating.findOne({where: {bookId, userId}})

            if (candidate) {
                const rating = await db.Rating.update(
                    {rate},
                    {where: {bookId, userId}}
                )
                return res.json(rating)
            } else {
                const rating = await db.Rating.create({
                    rate,
                    bookId,
                    userId,
                });
                return res.json(rating)
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new RatingController();