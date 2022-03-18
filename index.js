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
  res.json({
    id: 1,
    name: 'Product 1',
    price: 10
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
