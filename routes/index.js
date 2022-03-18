const express = require('express')
const productsRouter = require('./products.router')
const userRouter = require('./user.router')
const categoriesRouter = require('./categories.router')

function routerAPI (app) {
  const router = express.Router()
  app.use('/api/v1', router)

  // http://localhost:3000/api/v1/products
  router.use('/products', productsRouter)
  router.use('/user', userRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerAPI
