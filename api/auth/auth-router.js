const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { add, findBy } = require('../users/users-model')
const validatePayload = (req, res, next) => { next() }

router.post('/register', validatePayload, async (req, res, next) => {
    try {
        // pull credentials from req.body
        const { username, password } = req.body
        // hash the password w/ bcrypt
        const hash = bcrypt.hashSync(password, 8) // 2 ^ 8
        // store new user in db
        const newUser = { username, password: hash }
        const inserted = await add(newUser)
        // respond
        res.status(201).json({ message: `Welcome, ${inserted.username}` })
    } catch (err) {
        next (err)
    }
})
router.post('/login', validatePayload, async (req, res, next) => {
    try {
        // pull u/p from req.body
        const { username, password } = req.body
        // pull the user from the db by that username
        const [user] = await findBy({ username })
    
        if (user && bcrypt.compareSync(password, user.password)) {
          // password good, we can initialize a session!
          console.log(user)
          res.json({ message: `Good to see you again, ${username}` })
        } else {
          next({ status: 401, message: 'Invalid credentials' })
        }
        // server recreates hash from req.body.password // xxxxxxxxxxx
        // server compares 'recreated' against the one in db
      } catch (err) {
        next(err)
      }
})
router.get('/logout', validatePayload, async (req, res, next) => {
    res.json('logout wired!')
})


module.exports = router