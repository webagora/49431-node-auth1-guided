const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { add } = require('../users/users-model')
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
    res.json('login wired!')
})
router.get('/logout', validatePayload, async (req, res, next) => {
    res.json('logout wired!')
})


module.exports = router