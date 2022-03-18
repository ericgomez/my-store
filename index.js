const express = require('express')
const app = express()
const port = 3000

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new-route', (req, res) => {
  res.send('New route')
})

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product 1',
      price: 10
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id: id,
    name: 'Product 1',
    price: 10
  })
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
