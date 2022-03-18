const express = require('express')
const router = express.Router()

// http://localhost:3000/users?limit=10&offset=0
router.get('/users', (req, res) => {
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

module.exports = router
