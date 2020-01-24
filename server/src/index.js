const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const ChuckNorrisAPI = require("./datasources/chucknorris");

const dataSources = () => ({
  chuckNorrisAPI: new ChuckNorrisAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
