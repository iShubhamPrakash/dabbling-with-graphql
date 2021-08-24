const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./graphql/schema/schema');
const { rootResolver } = require('./graphql/resolvers');

const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true,
  rootValue: rootResolver,
}))

const PORT = 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));