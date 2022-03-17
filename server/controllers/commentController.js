const ApiError = require("../error/ApiError");


class CommentController {
    async getAllByBookId(req, res, next) {
        try {
            const {bookId} = req.params
            const comments = await Comment.findAll({where: {bookId}, include: ["user"]})
            return res.json({bookId, comments})

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async addBookComment(req, res, next) {
        try {
            const {bookId, userId, text, parentId} = req.body;
            const comment = await Comment.create({
                bookId, text,
                userId: userId === "" ? 0 : userId,
                parentId: parentId === "" ? 0 : parentId,
            })
            return res.json(comment)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CommentController()

