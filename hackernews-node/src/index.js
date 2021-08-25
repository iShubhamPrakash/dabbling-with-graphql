const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone developed by Shubham`
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen()
  .then(({ url }) => console.log(`The server is running on ${url}`));