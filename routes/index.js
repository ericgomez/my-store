const express = require('express')
const productsRouter = require('./products')
const userRouter = require('./user')
const categoriesRouter = require('./categories')

function routerAPI (app) {
  const router = express.Router()
  app.use('/api/v1', router)

  // http://localhost:3000/api/v1/products
  router.use('/products', productsRouter)
  router.use('/user', userRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerAPI
