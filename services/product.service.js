const faker = require('faker')
const Boom = require('@hapi/boom')

const pool = require('./../libs/postgres_pool')

class ProductsService {
  constructor () {
    this.products = []

    // generate products dummy data
    this.generate()

    // create a connection pool
    this.pool = pool
    this.pool.on('error', err =>
      console.error('Unexpected error on idle client', err)
    )
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
    const query = 'SELECT * FROM tasks'

    const { rows } = await this.pool.query(query)

    return rows
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
