const { Comment, Game, User } = require('../models')


const getGames = async (req, res) => {
  try {
    const games = await Game.findAll()
    res.send(games)
  } catch (error) {

  }
}

const getGameComments = async (req, res) => {
  try {
    const gameId = parseInt(req.params.game_id)
    const game = await Game.findOne({
      where: { id: gameId }
    })
    const comments = await Comment.findAll({ where: { game_id: gameId } })
    const gameComments = { ...game, 'comments': comments }
    res.send(gameComments)
  } catch (error) {

  }
}

const createGame = async (req, res) => {
  try {
    const newGame = { ...req.body, user_id: parseInt(req.params.user_id) }
    const created = await Game.create(newGame)
    console.log(created.id)
    const baseComment = {
      user_id: 1,
      game_id: created.id,
      comment: 'BASE'
    }
    const base = Comment.create(baseComment)
    res.send(created)

  } catch (error) {

  }
}

const updateGame = async (req, res) => {
  try {
    const game = await Game.update(
      { ...req.body },
      { where: { id: req.params.game_id }, returning: true }
    )
    res.send(game)
  } catch (error) {

  }
}

const deleteGame = async (req, res) => {
  try {
    await Game.destroy({ where: { id: req.params.game_id } })
    res.send({ msg: 'Game Deleted', payload: req.params.game_id, status: 'Ok' })
  } catch (error) {

  }
}

module.exports = {
  getGames,
  getGameComments,
  createGame,
  deleteGame,
  updateGame
}