const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`);

module.exports = {
  schema
}