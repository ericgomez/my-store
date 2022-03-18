function logErrors (err, req, res, next) {
  console.error(err)

  next(err)
}

// eslint-disable-next-line no-unused-vars
function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack // location of error
  })
}

module.exports = { logErrors, errorHandler }
