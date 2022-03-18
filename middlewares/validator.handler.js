const Boom = require('@hapi/boom')

function validatorHandler (schema, property) {
  // closure
  return (req, res, next) => {
    /*
     Dynamic request req[property] = req.body or req.query or req.params
     */
    const { error } = schema.validate(req[property], { abortEarly: false })
    // abortEarly = false -> return all errors

    if (error) {
      // send middleware error - Boom error
      next(Boom.badRequest(error.details[0].message))
    } else {
      // continue
      next()
    }
  }
}

module.exports = validatorHandler
