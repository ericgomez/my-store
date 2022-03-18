const { Pool } = require('pg')

/**
 * If you're working on a web application or other software which makes frequent queries you'll want to use a connection pool.
 * The easiest and by far most common way to use node-postgres is through a connection pool.
 * */

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'my_db',
  port: 5432
})

module.exports = pool
