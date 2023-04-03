const { Comment, User } = require('../models')


const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (err) {
    throw err
  }
}

const GetUserComments = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const comments = await Comment.findAll({ where: { user_id: userId }, attributes: ['user_id', 'game_id', 'comment', 'id'] })
    res.send(comments)
  } catch (error) {

  }
}

const CreateComment = async (req, res) => {
  try {

    let comment = await Comment.create({ ...req.body })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {

    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send({ msg: 'comment Deleted', payload: req.params.comment_id, status: 'Ok' })
  } catch (error) {

    throw error
  }
}


module.exports = {
  GetAllComments,
  GetUserComments,
  DeleteComment,
  UpdateComment,
  CreateComment
}