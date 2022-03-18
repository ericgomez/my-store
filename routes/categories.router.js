const express = require('express')
const router = express.Router()

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params

  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product 1',
    price: 10
  })
})

module.exports = router
