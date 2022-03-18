const productsRouter = require('./products')
// const userRouter = require('./user')
// const categoriesRouter = require('./categories')

function routerAPI (app) {
  app.use('/products', productsRouter)
  // app.use('/user', userRouter)
  // app.use('/categories', categoriesRouter)
}

module.exports = routerAPI
