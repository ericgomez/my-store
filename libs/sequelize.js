require('dotenv').config()
const { Sequelize } = require('sequelize')

const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log // logging shows the query that is being executed
})

module.exports = sequelize
