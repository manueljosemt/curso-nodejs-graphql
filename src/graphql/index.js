const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int!): Int
    getFloat: Float
    getString: String
    getBoolean: Boolean
    getId: ID
    getNumbers(numbers: [Int!]!): [Int]
    getProduct: Product
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
    createdAt: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello my name is ${args.name}, I'm ${args.age} years old`,
    getInt: (_, args) => args.age,
    getFloat: () => 1.1,
    getString: () => 'palabra',
    getBoolean: () => true,
    getId: () => 12341234,
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: '12341234',
        name: 'product1',
        price: 100.12,
        description: 'test',
        image: 'http://image.asas',
        createdAt: new Date().toISOString()
      }
    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })

  await server.start()
  server.applyMiddleware({app})
}

module.exports = useGraphql