const express = require('express')

const routerAPI = require('./routes')

const app = express()
const port = 3000

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new-route', (req, res) => {
  res.send('New route')
})

// modularization of routes
routerAPI(app)

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
