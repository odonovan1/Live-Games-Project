const router = require('express').Router();
const controller = require('../controllers/PickController')

router.post('/create/:user_id/:game_id', controller.CreatePick)
router.get('/:user_id/picks', controller.getUserPicks)
router.delete('/:pick_id/delete', controller.deletePick)

module.exports = router