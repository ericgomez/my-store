const { Client } = require('pg')

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'my_db',
    port: 5432
  })

  await client.connect()

  return client
}

module.exports = getConnection
