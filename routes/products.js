const express = require('express')

const ProductsService = require('./../services/products')
const validatorHandler = require('./../middlewares/validator.handler')
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema
} = require('./../schemas/products.schema')

const router = express.Router()
const service = new ProductsService()

// http://localhost:3000/products?limit=10
router.get('/', async (req, res) => {
  const products = await service.find()

  res.json(products)
})

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'), // middleware validatorHandler(schema, property)
  async (req, res, next) => {
    try {
      const { id } = req.params

      const product = service.findOne(id)

      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/',

  validatorHandler(createProductSchema, 'body'), // middleware validatorHandler(schema, property)
  async (req, res) => {
    const body = req.body

    const product = service.create(body)

    res.status(201).json(product)
  }
)

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'), // middleware validatorHandler(schema, property)
  validatorHandler(updateProductSchema, 'body'), // middleware validatorHandler(schema, property)
  async (req, res, next) => {
    const { id } = req.params
    const body = req.body

    try {
      const product = service.update(id, body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'), // middleware validatorHandler(schema, property)
  async (req, res) => {
    const { id } = req.params

    const product = service.delete(id)

    res.json(product)
  }
)

module.exports = router
