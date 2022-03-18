const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/filter', (req, res) => {
  res.send('Filter products')
})

// http://localhost:3000/products?limit=10
router.get('/', (req, res) => {
  const products = []
  const { limit } = req.query

  const size = limit ? parseInt(limit) : 100

  for (let i = 0; i < size; i++) {
    products.push({
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id: id,
    name: 'Product 1',
    price: 10
  })
})

router.post('/', (req, res) => {
  const body = req.body

  res.json({
    message: 'Product created',
    body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
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
