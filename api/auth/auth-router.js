const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../users/users-model')

router.post('/register', async (req, res, next) => {
  try {
    // pull creds from req.body
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8) // 2 ^ 8
    console.log(username, password, hash)
    // hash the password w/ bcrypt
    // store new user in db
    // respond
    res.json('register!!!')
  } catch (err) {
    next(err)
  }
})
router.post('/login', async (req, res, next) => {
  try {
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
