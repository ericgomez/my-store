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

  create (data) {
    const product = {
      id: faker.datatype.uuid, // generate uuid by faker
      ...data
    }

    this.products.push(product)
    return product
  }

  find () {
    return this.products
  }

  findOne (id) {
    return this.products.find(product => product.id === id)
  }

  update (id, data) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) {
      throw new Error('Product not found')
    }

    const product = {
      ...this.products[index], // keep the old data
      ...data // update the data
    }

    this.products[index] = product // replace the old data with the new data
    return product[index]
  }

  delete (id) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) {
      throw new Error('Product not found')
    }

    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductsService
