const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../users/users-model')

router.post('/register', async (req, res, next) => {
  try {
    // pull creds from req.body
    const { username, password } = req.body
    // hash the password w/ bcrypt
    const hash = bcrypt.hashSync(password, 10) // 2 ^ 8
    // store new user in db
    const newUser = { username, password: hash }
    const inserted = await User.add(newUser)
    // respond
    res.json({ message: `Welcome, ${inserted.username}` })
  } catch (err) {
    next(err)
  }
})
router.post('/login', async (req, res, next) => {
  try {
    // pull u/p from req.body
    // pull the username from the db by that username
    // { username: 'foo', password: 'xxxxxxxxxxx' }
    // server recreates hash from req.body.password // xxxxxxxxxxx
    // server compares 'recreated' against the one in db
    res.json('login!!!')
  } catch (err) {
    next(err)
  }
})
router.get('/logout', async (req, res, next) => {
  try {
    res.json('logout!!!')
  } catch (err) {
    next(err)
  }
})

module.exports = router
