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

error.handler.js

COLAPSARconst { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }

module.exports = { logErrors, errorHandler, boomErrorHandler }
