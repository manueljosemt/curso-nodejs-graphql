const { product, products, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } =  require("./auth.resolvers")

const resolvers = {
  Query: {
    product,
    products
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers