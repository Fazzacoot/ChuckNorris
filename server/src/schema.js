const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    categories: [Categories]
  }

  type Categories {
    id: ID
    name: String
  }
`;

module.exports = typeDefs;
