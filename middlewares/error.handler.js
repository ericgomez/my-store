/* eslint-disable no-unused-vars */
function logErrors (err, req, res, next) {
  console.error(err)

  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack // location of error
  })
}

function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    // Boom error
    const {
      output: { statusCode, payload }
    } = err

    res.status(statusCode).json(payload)
  } else {
    // Other type error
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
