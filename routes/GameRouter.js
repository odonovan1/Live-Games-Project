const router = require('express').Router();
const controller = require('../controllers/GameController')

router.get('/', controller.getGames)
router.get('/:game_id', controller.getGameComments)
router.post('/create/:user_id', controller.createGame)
router.put('/update/:game_id', controller.updateGame)
router.delete('/delete/:game_id', controller.deleteGame)



module.exports = router;