const express = require('express')

const routerAPI = require('./routes')

const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler')

const app = express()
const port = 3000

// middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// modularization of routes
routerAPI(app)

// middleware type error
app.use(logErrors)
app.use(boomErrorHandler) // Boom error else next error handler
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
