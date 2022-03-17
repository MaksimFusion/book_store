const Router = require('express')
const router = new Router()
const bookController = require ('../controllers/bookController')
const authMiddleware = require("../middleware/authMiddleware");
const commentController = require("../controllers/commentController")
const ratingController = require("../controllers/ratingController")


router.post('/', bookController.create)
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)

router.get("/comment/:bookId", commentController.getAllByBookId);
router.post("/comment", authMiddleware, commentController.addBookComment);

router.post("/rating", authMiddleware, ratingController.updateBookRating);

module.exports = router