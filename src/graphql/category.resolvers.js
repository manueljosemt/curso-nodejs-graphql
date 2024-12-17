const boom = require('@hapi/boom');
const checkRolesGql = require('../utils/checkRolesGql')
const CategoryService = require('./../services/category.service');
const service = new CategoryService()

const addCategory = async (_, {dto}, context) => {
  const { user } = await context.authenticate('jwt', {session: false})

  checkRolesGql(user, 'admin')

  if (!user) {
    throw boom.unauthorized('jwt is not valid')
  }
  return service.create(dto)
}

module.exports = {addCategory}