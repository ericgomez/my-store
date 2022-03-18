const faker = require('faker')
const Boom = require('@hapi/boom')

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
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean() // generate boolean by faker - product is blocked or not
      })
    }
  }

  async create (data) {
    const product = {
      id: faker.datatype.uuid, // generate uuid by faker
      ...data
    }

    this.products.push(product)
    return product
  }

  async find () {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000) // simulate a long process
    })
  }

  async findOne (id) {
    const product = this.products.find(product => product.id === id)

    if (!product) {
      throw Boom.notFound('Product not found')
    }

    if (product.isBlocked) {
      throw Boom.forbidden('Product is blocked')
    }

    return product
  }

  async update (id, data) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) {
      throw Boom.notFound('Product not found')
    }

    const product = {
      ...this.products[index], // keep the old data
      ...data // update the data
    }

    this.products[index] = product // replace the old data with the new data
    return product[index]
  }

  async delete (id) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) {
      throw Boom.notFound('Product not found')
    }

    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductsService
