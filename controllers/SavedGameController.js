const { Comment, SavedGame, User } = require('../models')


const getGames = async (req, res) => {
  try {
    const games = await SavedGame.findAll()
    res.send(games)
  } catch (error) {

  }
}

const getGameComments = async (req, res) => {
  try {
    const gameId = parseInt(req.params.game_id)
    const game = await SavedGame.findOne({
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
    const newGame = { ...req.body }
    const created = await SavedGame.create(newGame)

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
    const game = await SavedGame.update(
      { ...req.body },
      { where: { id: req.params.game_id }, returning: true }
    )
    res.send(game)
  } catch (error) {

  }
}

const deleteGame = async (req, res) => {
  try {
    await SavedGame.destroy({ where: { id: req.params.game_id } })
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