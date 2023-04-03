const router = require('express').Router();
const controller = require('../controllers/CommentController')

router.get('/', controller.GetAllComments)
router.get('/:user_id', controller.GetUserComments)
router.post('/post', controller.CreateComment)
router.put('/update/:comment_id', controller.UpdateComment)
router.delete('/delete/:comment_id', controller.DeleteComment)

module.exports = router;