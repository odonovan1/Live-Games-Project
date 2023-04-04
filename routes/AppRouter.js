const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')
const GameRouter = require('./GameRouter')
const SavedGameRouter = require('./SavedGameRouter')
const PickRouter = require('./PickRouter')


router.use('/auth', AuthRouter)
router.use('/comments', CommentRouter)
router.use('/games', GameRouter)
router.use('/archive', SavedGameRouter)
router.use('/pick', PickRouter)



module.exports = router