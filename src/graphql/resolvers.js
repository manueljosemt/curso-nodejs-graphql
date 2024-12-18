const { product, products, addProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } =  require("./auth.resolvers")
const { addCategory } =  require("./category.resolvers")
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/)

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
  },
  CategoryNameType
}

module.exports = resolvers