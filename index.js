const express = require('express')
var cors = require('cors')

const routerAPI = require('./routes')

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./middlewares/error.handler')

const app = express()
const port = 3000

// middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Configuring CORS w/ Dynamic Origin
const whitelist = ['http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
    // if origin is in whitelist or if origin is undefined
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

// modularization of routes
routerAPI(app)

// middleware type error
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler) // Boom error else next error handler
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
