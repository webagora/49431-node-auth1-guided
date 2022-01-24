const db = require('../../database/db-config.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
}

function find() {
  return db('users').select('id', 'username')
}

function findBy(filter) { // { username: 'foo' }
  return db('users').where(filter)
} // returns []

async function add(user) {
  const [id] = await db('users').insert(user)

  return findById(id)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
}
