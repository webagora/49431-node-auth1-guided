const router = require('express').Router()

router.post('/register', async (req, res, next) => {
  try {
    // pull creds from req.body
    // hash the password 
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
