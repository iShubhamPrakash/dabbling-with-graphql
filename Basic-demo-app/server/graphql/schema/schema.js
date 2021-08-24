const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    id: ID!
    body: String!
    author: User!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    body: String!
    post: Post!
    author: User!
  }

  type Query {
    users : [User]
    posts: [Post]
    user(id: ID): User
    post(id: ID): Post
  }

`);

module.exports = {
  schema
}