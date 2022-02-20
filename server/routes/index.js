const Router = require('express')
const router = new Router()
const authorRouter = require('./authorRouter')
const bookRouter = require('./bookRouter')
const genreRouter = require('./genreRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/author', authorRouter)
router.use('/book', bookRouter)

module.exports = router