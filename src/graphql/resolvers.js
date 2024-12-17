const { product, products, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } =  require("./auth.resolvers")
const { addCategory } =  require("./category.resolvers")

const resolvers = {
  Query: {
    product,
    products
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  }
}

module.exports = resolvers