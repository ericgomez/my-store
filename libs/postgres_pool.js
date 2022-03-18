require('dotenv').config()
const { Pool } = require('pg')

const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

/**
 * If you're working on a web application or other software which makes frequent queries you'll want to use a connection pool.
 * The easiest and by far most common way to use node-postgres is through a connection pool.
 * */

const pool = new Pool({ connectionString: URI })

module.exports = pool
