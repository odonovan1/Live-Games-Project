const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')
const GameRouter = require('./GameRouter')


router.use('/auth', AuthRouter)
router.use('/comments', CommentRouter)
router.use('/games', GameRouter)



module.exports = router