const express = require('express')

const ProductsService = require('./../services/products')

const router = express.Router()
const service = new ProductsService()

// http://localhost:3000/products?limit=10
router.get('/', async (req, res) => {
  const products = await service.find()

  res.json(products)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const product = service.findOne(id)

    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  const body = req.body

  const product = service.create(body)

  res.status(201).json(product)
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body

  try {
    const product = service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const product = service.delete(id)

  res.json(product)
})

module.exports = router
