const faker = require('faker')

class ProductsService {
  constructor () {
    this.products = []

    // generate products dummy data
    this.generate()
  }

  generate () {
    const size = 100

    for (let i = 0; i < size; i++) {
      this.products.push({
        id: faker.datatype.uuid,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
  }

  create () {}

  find () {
    return this.products
  }

  findOne (id) {
    return this.products.find(product => product.id === id)
  }

  update () {}

  delete () {}
}

module.exports = ProductsService