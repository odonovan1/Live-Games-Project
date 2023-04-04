const { Comment, Game, User, Pick } = require('../models')

const CreatePick = async (req, res) => {
  try {
    const pick = { ...req.body, user_id: parseInt(req.params.user_id), game_id: parseInt(req.params.game_id) }

    const created = await Pick.create(pick)
    res.send(created)

  } catch (error) {
    console.error(error)
    res.status(500).send("Error creating pick")
  }
}

const getUserPicks = async (req, res) => {
  const picks = await Pick.findAll({
    where: {
      user_id: parseInt(req.params.user_id)
    }
  })
  res.send(picks)
}

const deletePick = async (req, res) => {
  await Pick.destroy({ where: { id: req.params.pick_id } })
  res.send({ msg: 'pick Deleted', payload: req.params.pick_id, status: 'Ok' })
}




module.exports = {
  CreatePick,
  getUserPicks,
  deletePick
}