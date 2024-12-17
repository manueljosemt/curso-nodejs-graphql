const { product, products, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')

const resolvers = {
  Query: {
    product,
    products
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers