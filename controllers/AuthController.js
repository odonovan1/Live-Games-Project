const { User, Game, Comment } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { email, password, username } = req.body
    // Hashes the provided password
    let passwordDigest = await middleware.hashPassword(password)
    // Creates a new user
    const user = await User.create({ email, passwordDigest, username })

    // Sends the user as a response
    res.send({ email: user.email, passwordDigest: user.passwordDigest, username: user.username })
  } catch (error) {
    throw error
  }
}

const FindUserById = async (req, res) => {
  try {

    const userId = req.params.user_id
    const user = await User.findOne({
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {

  }
}

const FindUsers = async (req, res) => {
  try {


    const users = await User.findAll()
    res.send(users)
  } catch (error) {

  }
}

const FindUserGames = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const userAndComments = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Game,
          as: 'games',
          foreignKey: 'user_id',

        }
      ]
    })

    res.send(userAndComments)
  } catch (error) {

  }
}


const Login = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { email, password } = req.body
    // Finds a user by a particular field (in this case, email)
    const user = await User.findOne({
      where: { email: email },
      raw: true
    })
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    // If they match, constructs a payload object of values we want on the front end
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      // Creates our JWT and packages it with our payload to send as a response
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred on Login!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { oldPassword, newPassword } = req.body
    // Finds a user by a particular field (in this case, the user's id from the URL param)
    const user = await User.findByPk(req.params.user_id)
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    // If they match, hashes the new password, updates the db with the new digest, then sends the user as a response
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred updating password!' })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  Login,
  UpdatePassword,
  CheckSession,
  FindUserById,
  FindUserGames,
  FindUsers
}
