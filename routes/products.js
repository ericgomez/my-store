const express = require('express')

const ProductsService = require('./../services/products')

const router = express.Router()
const service = new ProductsService()

router.get('/filter', (req, res) => {
  res.send('Filter products')
})

// http://localhost:3000/products?limit=10
router.get('/', (req, res) => {
  const products = service.find()

  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const product = service.findOne(id)

  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body

  res.status(201).json({
    message: 'Product created',
    body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.status(200).json({
    message: 'Product updated',
    id,
    body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'Product deleted',
    id
  })
})

module.exports = router
