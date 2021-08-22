const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/schema')


const app = express();

app.use(cors());

var root = {
  test: () => {
    return console.log("test")
  }
};

app.use("/graphql",graphqlHTTP({
  schema: schema,
  graphiql: true,
  rootValue: root,
}))

const PORT = 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));