const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    categories: [Categories]
    joke(category:String!): Joke
  }

  type Categories {
    id: ID
    name: String
  }

  type Joke {
    id: ID
    category: String
    iconUrl: String
    url:String
    value: String
    createdAt: String
    updatedAt: String
  }
`;

module.exports = typeDefs;
