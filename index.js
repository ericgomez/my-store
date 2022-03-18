const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new-route', (req, res) => {
  res.send('New route')
})

app.get('/products/filter', (req, res) => {
  res.send('Filter products')
})

// http://localhost:3000/products?limit=10
app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id: id,
    name: 'Product 1',
    price: 10
  })
})

// http://localhost:3000/users?limit=10&offset=0
app.get('/users', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json([
      {
        id: 1,
        name: 'User 1',
        age: 10
      },
      {
        id: 2,
        name: 'User 2',
        age: 20
      }
    ])
  } else {
    res.status(400).send('Bad request')
  }
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params

  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product 1',
    price: 10
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
