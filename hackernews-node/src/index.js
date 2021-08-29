const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');


let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone developed by Shubham`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      let idCount = links.length
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  }
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf-8'
  ),
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`The server is running on ${url}`));
